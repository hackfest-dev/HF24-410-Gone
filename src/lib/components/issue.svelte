<script lang="ts">
    import issue from "$lib/assets/issue.png";
    import Avatar from "./avatar.svelte";
    export let user: {
        id: string;
        username: string;
        password: string;
        type: "Citizen" | "Department";
    }[];
    export let data: {
        image: string | null;
        title: string;
        id: number;
        status: boolean | null;
        description: string;
        latitude: string;
        longitude: string;
        pincode: string | null;
        complaintType: "association" | "group" | "individual";
        departmentType: number;
        userId: string;
        scope: number | null;
        createdAt: number;
    };
</script>

<div class="card">
    <div class="image-container">
        <img class="image" src={data.image} alt="Movie" style="height: 150px;" />
    </div>
    <div class="card-body">
        <h1 class="title">{data.title}</h1>
        <div class="author">
            <Avatar {user} />
            <p class="author-name">@rakshithx09</p>
        </div>
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: row;
        border-radius: 12px;
        background-color: #476ab0;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        width: 100%;
        margin-bottom: 45px;
        transition: background-color 0.3s ease;
        transition:
            background-color 0.3s,
            box-shadow 0.3s,
            transform 0.3s; /* Smooth transition on hover */
        position: relative;
        z-index: 1;
    }

    .card:hover {
        background-color: #3a4f85; /* Adjust color on hover */
        cursor: pointer; /* Change cursor on hover */
    }

    .image-container {
        width: 30%;
        background-color: #303645;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        overflow: hidden;
    }

    .image {
        width: 100%;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
    }

    .card-body {
        flex: 1;
        padding: 20px;
        background-color: #1e293b;
        border-top-right-radius: 12px;
        border-bottom-right-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title {
        font-size: 30px;
        color: #fff;
        margin-bottom: 10px;
    }

    .author {
        display: flex;
        align-items: center;
    }

    .author-name {
        color: #fff;
        margin-left: 10px;
    }
</style>
