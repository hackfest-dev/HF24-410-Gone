import { db } from '$lib/server/db/index.js'
import { postTable } from '$lib/server/db/schema.js'
import { fail } from '@sveltejs/kit'

type ComplaintType = 'association' | 'group' | 'individual' | 'individual'

export const actions = {
    default: async ({ request, locals }) => {

        let user = locals.user
        
        const formData = await request.formData()
        const title = formData.get('title')?.toString()
        const description = formData.get('description')?.toString()
        const pincode = formData.get('pincode')?.toString()
        const image = formData.get('image')?.toString()
        const complaintType= formData.get('complaintType')?.toString() as ComplaintType|undefined
        const departmentType= formData.get('departmentType')?.toString()
       


        if (!title || !description || !pincode || !image || !complaintType || !departmentType) {
            return fail(400, { msg: "Please provide all values" })
        }

        const post = await db.insert(postTable).values({
            title,
            description,
            latitude:"55",
            longitude:"55",
            pincode:Number(pincode),
            image,
            complaintType,
            departmentType: Number(departmentType),
            userId: Number(user.id),
            status: false
        })

        return {post, success: true }

    }
}