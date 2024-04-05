import type { Actions, Cookies } from "@sveltejs/kit";
import { db } from "$lib/server/db/index.js";
import { eq } from "drizzle-orm";
import { redirect } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import { createAuthJWT } from "$lib/server/auth/jwt.js";
import { fail } from '@sveltejs/kit';
import { citizenTable, userTable } from "$lib/server/db/schema.js";

async function setToken(user: User, cookies: Cookies) {
	const token = await createAuthJWT({
		name: user.name,
		email: user.email,
		id: user.id,
	});

	cookies.set("auth_token", token, {
		path: "/",
	});

	throw redirect(301, "/");
}

export async function load({ url, cookies, }) {
	if (cookies.get("auth_token")) {
		throw redirect(301, "/");
	}
}

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
        const aadharNumber = data.get("aadharnumber")?.toString()
		const username = data.get('username')?.toString();
		const password = data.get('password')?.toString();

         if (!username || !password || !aadharNumber) {
			return fail(400, { missing: true });
		}

        const queryResult = await db
			.select({
                id:citizenTable.id,
			})
			.from(citizenTable)
			.where(eq(citizenTable.aadhaarNo, aadharNumber))
			.limit(1);

		if (queryResult.length == 0) {
			return redirect(300,"/aadhar-auth")
		}

		const userId = queryResult[0].id;

		const hash = bcrypt.hashSync(password.toString(), 10);
		let user;

		try {
			const insertedUsers = await db.insert(userTable).values({
                id:userId,
                username:username,
				password: hash,
                type:"Citizen"
			}).returning();

			if (insertedUsers.length > 0) {
				user = insertedUsers[0]
			} else {
				throw new Error("Could not insert");
			}

		} catch (error) {
			return fail(400, { exists: true })
		}

		await setToken(user, cookies)
	
	}
};