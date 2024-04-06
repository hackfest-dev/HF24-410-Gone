import { db } from '$lib/server/db/index.js';
import { citizenTable, departmentTable, postTable, userTable } from '$lib/server/db/schema.js';

export async function load() {
    const posts = await db.select().from(postTable);
    return {
        posts:posts
    }
}