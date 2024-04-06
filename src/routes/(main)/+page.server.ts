import { db } from '$lib/server/db/index.js';
import { citizenTable, departmentTable, postTable, userTable } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';

export async function load({locals}) {
    const posts = await db.select().from(postTable);
    const user= await db.select().from(userTable).where(eq(userTable.id,locals.user.id))
    return {
        posts,user
    }
}