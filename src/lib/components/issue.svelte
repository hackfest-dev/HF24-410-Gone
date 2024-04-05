<script>
    import issue from "$lib/assets/issue.png";
    import Avatar from "./avatar.svelte";
</script>

<div class="card card-side bg-base-100 shadow-xl h-[10rem] w-[100%] ">
    <div class=" w-[30%] bg-[#303645]">
        <img class="h-full w-[100%] rounded-l-[12px]" src={issue} alt="Movie" />
    </div>
    <div class="card-body w-[60%] p-6 bg-black rounded-r-[12px]">
        <h1 class="text-[30px]">water issue</h1>
        <div class="flex items-center gap-2">
            <Avatar/>
            <p>@rakshithx09</p>
        </div>
        
    </div>
</div>
