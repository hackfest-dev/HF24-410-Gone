import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async(event)=>{
    
    const data = await event.request.formData();
    const otp= data.get("otp")

   
            // If a match is found, return true
            return new Response(JSON.stringify({
                success:true
            }),{
                headers:{
                    'Content-Type':'application/json'
                }
            })
        

    
}