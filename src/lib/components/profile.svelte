<!-- Profile.svelte -->
<script>
    import Avatar from "./avatar.svelte";

    export let profile = {
        name: "John Doe",
        address: "123 Main St",
        aadhar: "1234 5678 9012",
        dob: "01/01/1990",
        gender: "Male",
        phone: "123-456-7890",
        email: "john.doe@example.com",
    };
</script>

<div class="profile">
    <div class="flex items-center">
        <Avatar />
        <div class="biodata">
            <div class="biodata-item">
                <strong>Name:</strong>
                {profile.name}
            </div>
            <div class="biodata-item">
                <strong>Address:</strong>
                {profile.address}
            </div>
            <div class="biodata-item">
                <strong>Aadhar:</strong>
                {profile.aadhar}
            </div>
            <div class="biodata-item">
                <strong>Date of Birth:</strong>
                {profile.dob}
            </div>
            <div class="biodata-item">
                <strong>Gender:</strong>
                {profile.gender}
            </div>
            <div class="biodata-item">
                <strong>Phone:</strong>
                {profile.phone}
            </div>
            <div class="biodata-item">
                <strong>Email:</strong>
                {profile.email}
            </div>
        </div>
    </div>
</div>

<style>
    .profile {
        width: 100%;
        height: 100%;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }

    .avatar {
        width: 140px;
        height: 140px;
        background-color: #eee;
        border-radius: 50%;
        margin-right: 20px;
    }

    .biodata {
        display: flex;
        flex-direction: column;
    }

    .biodata-item {
        margin-bottom: 10px;
    }
</style>
