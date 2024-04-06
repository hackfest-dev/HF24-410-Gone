<script>
    import Avatar from "$lib/components/avatar.svelte";

    export let data;
    const user = data.user;
</script>

<div class="profile">
    <div class="flex items-center">
        <Avatar user />
        <div class="biodata">
            <div class="biodata-item">
                <strong>Name:</strong>
                {user.name}
            </div>
            <div class="biodata-item">
                <strong>Address:</strong>
                {user.address}
            </div>
            <div class="biodata-item">
                <strong>Aadhar:</strong>
                {user.aadhar}
            </div>
            <div class="biodata-item">
                <strong>Date of Birth:</strong>
                {user.dob}
            </div>
            <div class="biodata-item">
                <strong>Gender:</strong>
                {user.gender}
            </div>
            <div class="biodata-item">
                <strong>Phone:</strong>
                {user.phone}
            </div>
            <div class="biodata-item">
                <strong>Email:</strong>
                {user.email}
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

    .biodata {
        display: flex;
        flex-direction: column;
    }

    .biodata-item {
        margin-bottom: 10px;
    }
</style>
