import { db } from "$lib/server/db"
import { postTable } from "$lib/server/db/schema"
import type { RequestHandler } from "@sveltejs/kit"

export const POST: RequestHandler = async (event) => {
    const posts = await db.select().from(postTable)
    posts.map(async (item) => {
        if (new Date(item.createdAt).getDate() + 3 >= new Date().getDate() && new Date(item.createdAt).getDate() + 8 <= new Date().getDate()) {
            await db.update(postTable).set({
                scope: 2
            })
        } else if (new Date(item.createdAt).getDate() + 8 >= new Date().getDate()) {
            await db.update(postTable).set({
                scope: 3
            })
        }
    })

    return new Response(JSON.stringify({
        success:true
    }),{
        headers:{
            'Content-Type':'application/json'
        }
    })
}