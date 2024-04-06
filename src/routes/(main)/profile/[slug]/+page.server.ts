import { db } from '$lib/server/db/index.js';
import { citizenTable, commentsTable, departmentTable, postTable, userTable, voteTable } from '$lib/server/db/schema.js';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export async function load({ params, locals }) {
    const user = await db.select().from(userTable).where(eq(userTable.id, params.slug))
    if (!user) {
        return { success: false }
    }

    let userData: Citizen[] | Department[];
    if (user[0].type === "Citizen") {
        userData = await db.select().from(citizenTable).where(eq(citizenTable.id, params.slug)).limit(1)
    } else {
        userData = await db.select().from(departmentTable).where(eq(departmentTable.id, params.slug)).limit(1)
    }

    if (userData.length == 0) {
        throw redirect(300, "/")
    }

    const response: (Citizen | Department) & User = {
        ...userData[0],
        ...user
    }

    return {
        user: response
    }
}