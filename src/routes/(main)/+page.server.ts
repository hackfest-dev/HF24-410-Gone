import { db } from '$lib/server/db/index.js';
import { citizenTable, departmentTable, postTable, regionTable, userTable } from '$lib/server/db/schema.js';
import { and, eq, inArray } from 'drizzle-orm';

export async function load({ locals }) {
    const userId = locals.user.id;
    const user = await db.select().from(userTable).where(eq(userTable.id, userId))
    if (!user[0]) {
        return {
            message: `user does not exist`
        }
    }
    if (user[0].type === 'Citizen') {
        const citizen = await db.select().from(citizenTable).where(eq(citizenTable.id, userId))
        const departmentsQuery = db.selectDistinct({ departmentType: regionTable.department }).from(regionTable).where(eq(regionTable.pincode, citizen[0].pincode))
        const posts = await db.select().from(postTable).where(inArray(postTable.departmentType, departmentsQuery))

        return { posts }
    }else{
        const department = await db.select().from(departmentTable).where(eq(departmentTable.id, userId))
        const posts = await db.select().from(postTable).where(and(eq(postTable.pincode, regionTable.pincode), eq(regionTable.department, department[0].id)))

        return { posts }
    }
}