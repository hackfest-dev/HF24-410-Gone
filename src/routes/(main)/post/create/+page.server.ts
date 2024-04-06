import { db } from '$lib/server/db/index.js'
import { departmentTypeTable, postTable } from '$lib/server/db/schema.js'
import { fail } from '@sveltejs/kit'
import { v4 as uuidv4 } from 'uuid';
import ImageKit from "imagekit-javascript"

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
        console.log("complaintType: ",complaintType)
        console.log("departmentType: ",departmentType)
        console.log("pincode: ",pincode)
        console.log("description: ",description)
        console.log("title: ", title)

        if (!title || !description || !pincode || !file || !complaintType || !departmentType) {
            console.log("first")
            return fail(400, { msg: "Please provide all values" })
        }
        


let imagekit = new ImageKit({
    publicKey : "public_OASJi4CcQCOB0571dsj0s5jyxhs=",
    urlEndpoint : "https://ik.imagekit.io/htm1s1rdh",
});

// URL generation
// let imageURL = imagekit.url({
//     path : file,
//     transformation : [{
//         "height" : "300",
//         "width" : "400"
//     }]
// });

// Upload function internally uses the ImageKit.io javascript SDK
function upload() {
    imagekit.upload({
        file : file,
        fileName : uuidv4(),
        tags : ["tag1"]
    }, function(err, result) {
        console.log(arguments);
        console.log(imagekit.url({
            src: result.url,
            transformation : [{ height: 300, width: 400}]
        }));
    })
}

upload()

        // const post = await db.insert(postTable).values({
        //     title,
        //     description,
        //     latitude:"55",
        //     longitude:"55",
        //     pincode:pincode,
        //     image:b64encoded,
        //     complaintType,
        //     departmentType: Number(departmentType),
        //     userId: Number(user.id),
        //     status: false
        // })
        console.log("post")
        return { success: true }
    }
}