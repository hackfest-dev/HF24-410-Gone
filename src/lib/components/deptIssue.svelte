<script lang="ts">
    import issue from "$lib/assets/issue.png";
    import Avatar from "./avatar.svelte";

    export let data: {
        user: {
            id: string;
            username: string;
            password: string;
            type: "Citizen" | "Department";
        } | null;
        post: {
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
    };
</script>

<div class="card">
    <div class="image-container">
        <img
            class="image"
            src={data.post.image}
            alt="Movie"
            style="height: 150px;"
        />
    </div>
    <div class="card-body">
        <h1 class="title">{data.post.title}</h1>
        <div class="author">
            <Avatar user={data.user} />
            <p class="author-name">{data.user?.username}</p>
        </div>
        <div>
            <button class="btn">
                Approve
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    ><path
                        fill="currentColor"
                        d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"
                    /></svg
                >
            </button>
            <button class="btn">
                Reject
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    ><path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                    /></svg
                >
            </button>
        </div>
    </div>
</div>