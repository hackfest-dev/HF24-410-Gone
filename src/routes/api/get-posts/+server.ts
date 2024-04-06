import { db } from "$lib/server/db"
import { postTable } from "$lib/server/db/schema"
import type { RequestHandler } from "@sveltejs/kit"

export const POST: RequestHandler = async (event) => {
    const posts = await db.select().from(postTable)

    return new Response(JSON.stringify({
        posts: posts
    }), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}