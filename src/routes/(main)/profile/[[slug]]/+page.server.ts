import { db } from '$lib/server/db/index.js';
import { citizenTable, departmentTable, postTable, userTable } from '$lib/server/db/schema.js';
import { redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export async function load({ params, locals }) {
    const id = params.slug ?? locals.user.id
    const user = await db.select().from(userTable).where(eq(userTable.id, id))
    if (!user) {
        return { success: false }
    }

    let userData: Citizen[] | Department[];
    if (user[0].type === "Citizen") {
        userData = await db.select().from(citizenTable).where(eq(citizenTable.id, id)).limit(1)
    } else {
        userData = await db.select().from(departmentTable).where(eq(departmentTable.id, id)).limit(1)
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