<script lang="ts">
    import issue from "$lib/assets/issue.png";
    export let data;

    const complaintType = ["association", "group", "individual"];
</script>

<div class="container">
    <div class="picture">
        <img
            src={issue}
            alt="jj"
            style="height: 500px;border-top-left-radius:20px ;
      border-bottom-left-radius:20px ;"
        />
    </div>
    <div class="form-container">
        <form method="post" enctype="multipart/form-data">
            <label for="pin">Title</label>
            <input type="text" name="title" required />

            <label for="description">Description:</label>
            <textarea name="description" rows="4" required></textarea>

            <label for="pin">Pin Code: </label>
            <input type="text" name="pincode" id="pincode" required />

            <label for="department">Department:</label>
            <select name="departmentType" id="departmentType" required>
                <option value="">Select Department</option>
                {#each data.departmentTypes as type}
                    <option value={type}>{type}</option>
                {/each}
            </select>

            <label for="department">Department:</label>
            <select id="complaintType" name="complaintType" required>
                <option>Select Department</option>
                {#each complaintType as type}
                    <option value={type}>{type}</option>
                {/each}
            </select>

            <label for="photo">Upload Photo:</label>
            <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                required
            />
            <button>Submit</button>
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
</style>
