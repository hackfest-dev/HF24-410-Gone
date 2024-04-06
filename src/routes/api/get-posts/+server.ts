import { db } from "$lib/server/db"
import { postTable } from "$lib/server/db/schema"
import type { RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async (event) => {
    const posts = await db.select({
        title:postTable.title,
        lat:postTable.latitude,
        long:postTable.longitude,
    }).from(postTable)

    console.log(posts)

    return new Response(JSON.stringify({
        posts: posts
    }), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}