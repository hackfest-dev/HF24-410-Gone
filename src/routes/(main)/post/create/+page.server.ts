import { db } from '$lib/server/db/index.js'
import { departmentTypeTable, postTable } from '$lib/server/db/schema.js'
import { fail, redirect } from '@sveltejs/kit'

export async function load() {
    const deptartmentTypes =await db.select({
        id:departmentTypeTable.id,
        name:departmentTypeTable.name
    }).from(departmentTypeTable)
    
    return { 
        departmentTypes:deptartmentTypes
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
        console.log("complaintType: ",complaintType)
        console.log("departmentType: ",departmentType)
        console.log("pincode: ",pincode)
        console.log("description: ",description)
        console.log("title: ", title)

        if (!title || !description || !pincode || !file || !complaintType || !departmentType) {
            console.log("first")
            return fail(400, { msg: "Please provide all values" })
        }
       let buffer:Buffer;
      console.log(file)
      
      const arrayBuffer = await file.arrayBuffer(); // Attempt to retrieve ArrayBuffer
      console.log(arrayBuffer); // Check if file object is valid

      if (arrayBuffer instanceof ArrayBuffer) { // Check if ArrayBuffer is valid
        buffer = Buffer.from(arrayBuffer); // Convert ArrayBuffer to Buffer
        console.log(buffer)
            // Further processing with the buffer...

        const post = await db.insert(postTable).values({
            title,
            description,
            latitude:"55",
            longitude:"55",
            pincode:pincode,
            image:buffer,
            complaintType,
            departmentType: Number(departmentType),
            userId: user.id,
            status: false
        })
        
        throw redirect(300,"/")
        } else {
            console.error("Failed to retrieve valid ArrayBuffer from file.");
            return {success:false}
        }
   

       
    }
}