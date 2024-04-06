<script lang="ts">
    import { goto } from "$app/navigation";
    import issue from "$lib/assets/issue.png";
    export let data;

    const complaintType = ["association", "group", "individual"];

    function readFileAsBase64(fileObj:File) {
        return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
    
        fileReader.onload = function(event) {
            // 'result' property contains the base64-encoded string
            const base64Image = event!.target!.result;
    
            // Resolve the Promise with the base64 image
            resolve(base64Image);
        };
    
        // Handle errors
        fileReader.onerror = function(error) {
            reject(error);
        };
    
        // Read the file as a data URL
        fileReader.readAsDataURL(fileObj);
        });
    }

    async function handleSubmit(event:SubmitEvent) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const formData = new FormData(form);

        const image = formData.get("image") as File;
        const base64Image = await readFileAsBase64(image) as string;
        formData.set("image", base64Image);
        fetch("/post/create", {
            method: "POST",
            body: formData,
        }).then((res) => {
            if (res.ok) {
                goto("/");
            } else {
                alert("Failed to submit complaint");
            }
        })
     };

</script>

<div class="container">
    <div class="picture">
        <img
            src={issue}
            alt="jj"
            style="height: 642px;border-top-left-radius:20px ;
      border-bottom-left-radius:20px ;"
        />
    </div>
    <div class="form-container">
        <form  on:submit={handleSubmit}> 
            <label for="pin">Title</label>
            <input type="text" name="title" required />

            <label for="description">Description:</label>
            <textarea name="description" rows="4" required
            style="background-color: #1E293B;"></textarea>

            <label for="pin">Pin Code: </label>
            <input type="text" name="pincode" id="pincode" required />

            <label for="department">Department:</label>
            <select name="departmentType" id="departmentType" required style="background-color: #1E293B;">
                <option value="" style="background-color: #1E293B;">Select Department</option>
                {#each data.departmentTypes as type}
                    <option value={type.id} style="background-color: #1E293B;">{type.name} </option>
                {/each}
            </select>

            <label for="department" >Type:</label>
            <select id="complaintType" name="complaintType" required style="background-color: #1E293B;">
                <option>Select Department</option>
                {#each complaintType as type}
                    <option value={type}>{type}</option>
                {/each}
            </select>

            <label for="photo">Upload Photo:</label>
            <div class="sidebyside">
            <input
                type="file"
                name="image"
                required
                style="margin-top: 10px;"
            />
            <button>Submit</button>
        </div>
        </form>
    </div>
</div>

<style>
    input {
        background-color: #1e293b;
        border: #334155;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: stretch; /* Ensure equal height columns */
        margin: 20px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Add box shadow */
    }
    .form-container {
        flex: 1;
        padding: 20px;
        border: 3px solid #334155;
        border-radius: 20px;
        border-left: none;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }
    .picture {
        flex: 1; /* Maintains equal width with the form container */
        height: 100%; /* Ensure the picture div takes full height */
        display: flex;
        align-items: center;
        justify-content: center;
        border: #334155 3px solid;
        border-right: none;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        
    }
    /* Rest of your styles remain the same */
    label {
        display: block;
        margin-bottom: 10px;
    }

    input[type="text"],
    select {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #334155;
        border-radius: 5px;
        box-sizing: border-box;
    }
    textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #334155;
        border-radius: 5px;
        box-sizing: border-box;
    }
    button {
        display: block;
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
      
    }
    button:hover {
        background-color: #0056b3;
    }
    .sidebyside {
        display: flex;
        
    }
</style>
