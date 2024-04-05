<script>
    import "../app.css";
    import Avatar from "$lib/components/avatar.svelte";
</script>

<div class="topNavbar">
    <div class="img mr-auto"></div>
    <Avatar />
</div>

<slot />

<style>
    .sideNavbar {
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        left: 2rem;
        width: 70px; /* Adjust as needed */
        height: 70vh;
        background-color: linear-gradient(180deg, #1e293b 0%, #0f1726 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0; /* Adjust as needed */
        border-radius: 22px;
    }

    .button {
        width: 50px;
        height: 50px;
        background-color: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333;
        text-decoration: none;
        margin-bottom: 10px; /* Adjust as needed */
    }

    .button:hover {
        background-color: #ddd;
    }
    body {
        padding: 2rem;
        height: 100%;
        width: 100%;
        background-color: #1e293b;
    }
    .topNavbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background-color: rgb(41, 40, 40);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        z-index: 1000; /* Ensure it's above other content */
    }

    .topNavbar .img {
        max-height: 50px; /* Adjust as needed */
        border: 2px solid rgb(255, 252, 252);
        height: 20px;
        width: 50px;
    }
</style>
