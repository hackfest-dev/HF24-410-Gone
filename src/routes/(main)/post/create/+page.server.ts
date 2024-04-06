import { v2 as cloudinary } from 'cloudinary';
import { db } from '$lib/server/db/index.js'
import { departmentTypeTable, postTable } from '$lib/server/db/schema.js'
import { fail, redirect } from '@sveltejs/kit'


export async function load() {
    const deptartmentTypes = await db.select({
        id: departmentTypeTable.id,
        name: departmentTypeTable.name
    }).from(departmentTypeTable)

    return {
        departmentTypes: deptartmentTypes
    }
}

export const actions = {
    default: async ({ request, locals }) => {
        let user = locals.user

        const formData = await request.formData()
        const title = formData.get('title')?.toString()
        const description = formData.get('description')?.toString()
        const pincode = formData.get('pincode')?.toString()
        const image = formData.get('image')?.toString()
        const complaintType = formData.get('complaintType')?.toString() as ComplaintType | undefined
        const departmentType = formData.get('departmentType')?.toString()

        cloudinary.config({
            cloud_name: 'dwttv4vty',
            api_key: '285775194921473',
            api_secret: 'Q3bgYCRqOdsjy1t1aVDvWDJ76Dg'
        });

        cloudinary.uploader.upload("",
            { public_id: "olympic_flag" },
            function (error, result) { console.log(result); });

        if (!title || !description || !pincode || !image || !complaintType || !departmentType) {
            console.log("first")
            return fail(400, { msg: "Please provide all values" })
        }

        console.log(image)

        const post = await db.insert(postTable).values({
            title,
            description,
            latitude: "55",
            longitude: "55",
            pincode: pincode,
            image: image,
            complaintType,
            departmentType: Number(departmentType),
            userId: user.id,
            status: false
        })

        throw redirect(300, "/")

    }
}