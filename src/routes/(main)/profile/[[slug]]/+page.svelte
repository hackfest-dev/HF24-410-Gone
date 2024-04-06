<script>
    import Avatar from "$lib/components/avatar.svelte";

    export let data;
    const user = data.user;
</script>

<div class="profile">
    <div class="flex items-center">
        <div class="avatar-container">
            <Avatar {user} class="avatar-image" />
        </div>
        <div class="biodata-container">
            <div class="biodata">
                <div class="biodata-item">
                    <strong>Name:</strong> {user.name}
                </div>
                <div class="biodata-item">
                    <strong>Address:</strong> {user.address}
                </div>
                <div class="biodata-item">
                    <strong>Aadhar:</strong> {user.aadhar}
                </div>
                <div class="biodata-item">
                    <strong>Date of Birth:</strong> {user.dob}
                </div>
                <div class="biodata-item">
                    <strong>Gender:</strong> {user.gender}
                </div>
                <div class="biodata-item">
                    <strong>Phone:</strong> {user.phone}
                </div>
                <div class="biodata-item">
                    <strong>Email:</strong> {user.email}
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .profile {
        width: 100%;
        max-width: 50rem;
        /* Limit width for better readability */
        margin: 0 auto; /* Center horizontally */
        padding: 20px;
        border: #334155 1px solid;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-color: #1E293B; /* Add background color */
       
    }

    .flex.items-center {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .avatar-container {
        width: 15rem; /* Adjust the width of the avatar container */
        margin-right: 20px; /* Add space between avatar and biodata */
    }

   

    .biodata-container {
        flex: 1; /* Make the biodata container fill available space */
    }

    .biodata {
        font-size: 16px; /* Increase font size for better readability */
    }

    .biodata-item {
        margin-bottom: 15px; /* Increase spacing between items */
    }

    .biodata-item strong {
        margin-right: 5px; /* Add some space between label and value */
        color: #fff; /* Change color to white */
    }
    
</style>
