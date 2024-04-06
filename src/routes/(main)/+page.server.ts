import { db } from '$lib/server/db/index.js';
import { citizenTable, departmentTable, postTable, regionTable, userTable } from '$lib/server/db/schema.js';
import { redirect } from '@sveltejs/kit';
import { and, eq, inArray, sql } from 'drizzle-orm';

export async function load({ locals }) {
    const userId = locals.user.id;
    const user = await db.select().from(userTable).where(eq(userTable.id, userId))
    if (!user.length) {
        throw redirect(300,"/")
    }

    const citizen = await db.select().from(citizenTable).where(eq(citizenTable.id, userId))

    if (!citizen.length) {
        throw redirect(300,"/")
    }
        
    if (user[0].type === 'Citizen') {
        //   const posts = await db.select().from(postTable).leftJoin(departmentTable, eq(departmentTable.type, postTable.departmentType))
        //     .where(
        //         and(eq(departmentTable.scope,postTable.scope),
        //             inArray(departmentTable.id,
        //                 db.select({id:regionTable.department})
        //                     .from(regionTable)
        //                     .leftJoin(citizenTable,eq(citizenTable.pincode,regionTable.pincode))
        //                     .where(eq(citizenTable.id, citizen[0].pincode))
        //                 )));

        const posts = await db.select().from(postTable).leftJoin(userTable,eq(postTable.userId,userTable.id)).where(eq(postTable.pincode, citizen[0].pincode))
        return { posts }
    }else{
        const department = await db.select().from(departmentTable).where(eq(departmentTable.id, userId))
        const posts = await db.select().from(postTable).leftJoin(userTable,eq(postTable.userId,userTable.id)).where(and(eq(postTable.pincode, regionTable.pincode), eq(regionTable.department, department[0].id)))

        return { posts }
    }
}