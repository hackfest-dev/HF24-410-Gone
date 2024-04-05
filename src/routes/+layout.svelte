<script>
    import "../app.css";
    import Avatar from "$lib/components/avatar.svelte";
</script>


    <div class="topNavbar">
        <div class="img"></div>
        <Avatar />
    </div>

<slot />

<style>
    .topNavbar {
        
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background-color: rgb(41, 40, 40);
        display: flex;
        justify-content:center;
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
