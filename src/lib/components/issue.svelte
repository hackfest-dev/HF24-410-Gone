<script lang="ts">
    import issue from "$lib/assets/issue.png";
    import Avatar from "./avatar.svelte";
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

<div class="card card-side bg-base-100 shadow-xl h-[10rem] w-[100%]">
    <div class=" w-[30%] bg-[#303645]">
        <img class="h-full w-[100%] rounded-l-[12px]" src={data.image} alt="Movie" />
    </div>
    <div class="card-body w-[60%] p-6 bg-black rounded-r-[12px]">
        <h1 class="text-[30px]">{data.title}</h1>
        <div class="flex items-center gap-2">
            <Avatar />
            <p>@rakshithx09</p>
        </div>
    </div>
</div>
