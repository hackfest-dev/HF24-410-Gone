import { db } from "$lib/server/db/index.js";
import { fail, redirect } from "@sveltejs/kit";
import { citizenTable } from "$lib/server/db/schema.js";
import { v4 as uuidv4 } from 'uuid';

export const load = async ({ locals }) => {
    return {}
}

export const actions = {

    verify: async ({ request, locals }) => {
        const data = await request.formData();
        const aadhar = data.get("aadharnumber")?.toString();

        if (!aadhar) return fail(404, { missing: true, feild: "title" })
        //TODO: verify 
        const response = await fetch('/api/aadharAuth', {
            method: 'POST',
            body: data
        })

        const resData: { success: boolean } = await response.json()

        if (resData.success) {
            return { verified: true };
        } else {
            return { verified: false };
        }
    },
    submit: async ({ request, locals }) => {
        const data = await request.formData();
        const aadhar = data.get("aadharnumber")?.toString();
        const otp = data.get("otp")?.toString()

        if (!aadhar) return fail(404, { missing: true, feild: "title" })
        if (!otp) return fail(404, { missing: true, feild: "otp" })

        const response = await fetch('/api/aadharOtp', {
            method: 'POST',
            body: data
        })
        const citizen: Citizen = await response.json()

        await db.insert(citizenTable).values({
            id:uuidv4(),
            ...citizen
        })

        return redirect(300, "/signup");
    }
}