
import { db } from '$lib/server/db/index.js'
import { commentsTable, postTable, voteTable } from '$lib/server/db/schema.js'
import { error, redirect } from '@sveltejs/kit'
import { and, eq } from 'drizzle-orm'

export async function load({ params }) {
    let post = await db.select().from(postTable).where(eq(postTable.id, Number(params.slug)))  
    const comments = await db.select().from(commentsTable).where(eq(commentsTable.postId, Number(params.slug)))
    let count=0;
    const votes =await db.select().from(voteTable).where(eq(voteTable.postId, Number(params.slug)))
    votes.forEach((item)=>{
        if(item.choice==="upvote"){
            count++;
        }else if(item.choice==="downvote"){
            count--;
        }
    })

    if (!post[0]) {
      redirect(301, '/')
    }

    return { post , comments, count}
  }

  export const actions = {
    comment: async ({ request, locals ,params}) => {

        let user = locals.user
        const formData = await request.formData()
        const content = formData.get('content')?.toString()
        
       await db.insert(commentsTable).values({
        postId: Number(params.slug),
        userId: Number(user.id),
        content
       })
       
        return {success: true }

    },

    upVote: async({request, locals ,params})=>{
        let user = locals.user
        const userAlreadyVoted = await db.select().from(voteTable).where(and(eq(voteTable.userId, user.id),eq(voteTable.postId, Number(params.slug))))
        if(userAlreadyVoted.length !==0){
            await db.update(voteTable).set({
                choice:"upvote"
            }).where(and(eq(voteTable.userId, user.id),eq(voteTable.postId, Number(params.slug))))
    
            return{
                message:"voted successfully"
            }
        }else{
            await db.insert(voteTable).values({
                userId:user.id,
                postId:Number(params.slug),
                choice:"upvote"
            })
            return {
                message:"upvoted successfully"
            }
        }
    
    },

    downVote: async({request, locals ,params})=>{
        let user = locals.user
        const userAlreadyVoted = await db.select().from(voteTable).where(and(eq(voteTable.userId, user.id),eq(voteTable.postId, Number(params.slug))))
        if(userAlreadyVoted.length !==0){
            await db.update(voteTable).set({
                choice:"downvote"
            }).where(and(eq(voteTable.userId, user.id),eq(voteTable.postId, Number(params.slug))))
    
            return{
                message:"voted successfully"
            }
        }else{
            await db.insert(voteTable).values({
                userId:user.id,
                postId:Number(params.slug),
                choice:"downvote"
            })
            return {
                message:"downvoted successfully"
            }
        }
    
    }
}