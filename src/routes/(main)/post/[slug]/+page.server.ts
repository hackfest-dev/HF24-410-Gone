import { db } from '$lib/server/db/index.js'
import { commemtsTable, postTable, voteTable } from '$lib/server/db/schema.js'
import { error, redirect } from '@sveltejs/kit'
import { eq } from 'drizzle-orm'

export async function load({ params }) {
    const post = await db.select().from(postTable).where(eq(postTable.id, Number(params.slug)))  
    const comments = await db.select().from(commemtsTable).where(eq(commemtsTable.postId, Number(params.slug)))
    let count=0;
    const votes =await db.select().from(voteTable).where(eq(voteTable.postId, Number(params.slug)))
    votes.forEach((item)=>{
        if(item.choice==="upvote"){
            count++;
        }else if(item.choice==="downvote"){
            count--;
        }
    })

    if (!post) {
      redirect(301, '/')
    }
  
    return { post , comments, count}
  }