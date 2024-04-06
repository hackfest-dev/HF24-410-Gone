import { db } from '$lib/server/db/index.js'
import { departmentTypeTable, postTable } from '$lib/server/db/schema.js'
import { fail } from '@sveltejs/kit'

export async function load() {
    const deptartmentTypes =await db.select({
        name:departmentTypeTable.name
    }).from(departmentTypeTable)
    
    return { 
        departmentTypes:deptartmentTypes.map(e=>e.name)
     }
  }

export const actions = {
    default: async ({ request, locals }) => {
        let user = locals.user
        
        const formData = await request.formData()
        const title = formData.get('title')?.toString()
        const description = formData.get('description')?.toString()
        const pincode = formData.get('pincode')?.toString()
        const file = formData.get('photo') as File
        const complaintType= formData.get('complaintType')?.toString() as ComplaintType|undefined
        const departmentType= formData.get('departmentType')?.toString()
        
        if (!title || !description || !pincode || !file || !complaintType || !departmentType) {
            return fail(400, { msg: "Please provide all values" })
        }
        const image = new Uint8Array(await file.arrayBuffer());
        let decoder = new TextDecoder('utf8');
let b64encoded = btoa(decoder.decode(image));

        const post = await db.insert(postTable).values({
            title,
            description,
            latitude:"55",
            longitude:"55",
            pincode:pincode,
            image:b64encoded,
            complaintType,
            departmentType: Number(departmentType),
            userId: Number(user.id),
            status: false
        })

        return {post, success: true }
    }
}