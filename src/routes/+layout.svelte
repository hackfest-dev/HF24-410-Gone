<script>
    import "../app.css";
    import Avatar from "$lib/components/avatar.svelte";
    import logo from "$lib/assets/logo.svg";
    import "iconify-icon";

    export let data;
</script>

<div class="topNavbar">
    <img src={logo} alt="janvani" class="logo" />
    {#if data.user}
        <a href="/profile/{data.user.id}">
            <Avatar user={data.user} />
        </a>
        
    {/if}
</div>

<slot />

<style>
    .topNavbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background-color: #1d1f23;
        display: flex;
        justify-content: space-between;
        align-items: left;
        padding: 1rem 2rem;
        z-index: 2;
    }

    .logo {
        height: 100%;
    }

    a{
        height: 100%;
        aspect-ratio: 1;
    }
</style>
