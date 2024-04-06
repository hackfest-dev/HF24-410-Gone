<script lang="ts">
    import Avatar from "$lib/components/avatar.svelte";
    import Issue from "$lib/components/issue.svelte";
    type user = (Citizen | Department) & User 

    export let data: {
        user: User;
        posts: Post[];
    };

    const user: User = data.user;
    const posts: Post[] = data.posts;
</script>

<div class="profile">
    <div class="flex items-center">
        <div class="avatar-container">
            <Avatar {user}  />
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
                    <strong>Aadhar:</strong> {user.aadharNo}
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
    
    <div>
        {#each posts as post }
            <Issue post={post} user={user[0]} />
        {/each}
    </div>
</div>




<style>
    .profile {
        width: 100%;
        max-width: 50rem; /* Limit width for better readability */
        margin: 0 auto; /* Center horizontally */
        padding: 20px;
        border-radius: 10px;
        background-color: #1E293B; /* Background color */
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Add shadow */
        
    }

    .flex.items-center {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .avatar-container {
        width: 15rem; /* Adjust the width of the avatar container */
        margin-right: 20px; /* Add space between avatar and biodata */
        /* Add shadow */
    }

    .biodata-container {
        flex: 1; /* Make the biodata container fill available space */
        margin-bottom: 30px;
         /* Add shadow */
    }

    .biodata {
        font-size: 16px; /* Increase font size for better readability */
    }

    .biodata-item {
        margin-bottom: 15px; /* Increase spacing between items */
        color: #fff; /* Change text color to white */
    }

    .biodata-item strong {
        margin-right: 5px; /* Add some space between label and value */
    }
</style>
