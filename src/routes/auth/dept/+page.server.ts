import type { Actions, Cookies } from "@sveltejs/kit";
import { db } from "$lib/server/db/index.js";
import { eq } from "drizzle-orm";
import { redirect } from "@sveltejs/kit";
import bcrypt from "bcrypt";
import { createAuthJWT } from "$lib/server/auth/jwt.js";
import { fail } from '@sveltejs/kit';
import { userTable } from "$lib/server/db/schema.js";

async function setToken(user: User, cookies: Cookies) {
	const token = await createAuthJWT({
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
		const deptId = data.get('id')?.toString();
		const password = data.get('password')?.toString();

         if (!deptId || !password) {
			return fail(400, { missing: true });
		}


        const queryResult = await db
			.select({
                id:userTable.id,
				password: userTable.password,
			})
			.from(userTable)
			.where(eq(userTable.id, deptId))
			.limit(1);	

		if (queryResult.length == 0) {
			return fail(400, { incorrect: true});
		}

		const user:User = queryResult[0];

		if (!user || !bcrypt.compareSync(password,user.password)) {
			return fail(400, { incorrect: true});
		}

		await setToken(user, cookies);

		console.log("here")

		throw redirect(300,"/");
	}
};