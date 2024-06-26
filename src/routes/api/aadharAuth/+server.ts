import type { RequestHandler } from "@sveltejs/kit";

const aadharDB = [
    {
        "aadhaarNo": "999941057058",
        "name": "Shivshankar Choudhury",
        "dob": "13-05-1968",
        "dobt": "V",
        "gender": "M",
        "phone": "2810806979",
        "email": "sschoudhury@dummyemail.com",
        "street": "12 Maulana Azad Marg",
        "vtc": "New Delhi",
        "subdist": "New Delhi",
        "district": "New Delhi",
        "state": "New Delhi",
        "pincode": "110002"
    },
    {
        "aadhaarNo": "999971658847",
        "name": "Kumar Agarwal",
        "dob": "04-05-1978",
        "dobt": "A",
        "gender": "M",
        "phone": "2314475929",
        "email": "kma@mailserver.com",
        "building": "IPP, IAP",
        "landmark": "Opp RSEB Window",
        "street": "5A Madhuban",
        "locality": "Veera Desai Road",
        "vtc": "Udaipur",
        "district": "Udaipur",
        "state": "Rajasthan",
        "pincode": "313001"
    },
    {
        "aadhaarNo": "999933119405",
        "name": "Fatima Bedi",
        "dob": "30-07-1943",
        "dobt": "A",
        "gender": "F",
        "phone": "2837032088",
        "email": "bedi2020@mailserver.com",
        "building": "K-3A Rampur Garden",
        "vtc": "Bareilly",
        "district": "Bareilly",
        "state": "Uttar Pradesh",
        "pincode": "243001"
    },
]

export const POST: RequestHandler = async(event)=>{
    
    const data = await event.request.formData();
    const adharNo= data.get("aadharnumber")

    for (let i = 0; i < aadharDB.length; i++) {
        // Check if the uid property of the current object matches the given UID
        if (aadharDB[i].aadhaarNo === adharNo) {
            // If a match is found, return true
            return new Response(JSON.stringify({
                success:true
            }),{
                headers:{
                    'Content-Type':'application/json'
                }
            })
        }
    }
    // If no match is found after iterating through all objects, return false
    return new Response(JSON.stringify({
        success:false
    }),{
        headers:{
            'Content-Type':'application/json'
        }
    })

    
}