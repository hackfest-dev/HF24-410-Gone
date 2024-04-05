<script>
    import issue from "$lib/assets/issue.png";
    import Avatar from "./avatar.svelte";
</script>

<div class="card card-side bg-base-100 shadow-xl h-[8rem] w-[100%]">
    <figure class="h-[7rem] w-auto max-w-[50%] bg-[#303645]">
        <img class="h-auto w-auto" src={issue} alt="Movie" />
    </figure>
    <div class="card-body">
        <div class="flex items-center gap-2">
            <Avatar />
            <p>@rakshithx09</p>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            facilis quod ullam doloribus sequi deleniti adipisci provident cum
            aut corrupti, at repudiandae voluptate esse soluta quos quasi, animi
            reprehenderit reiciendis.
        </p>
    </div>
</div>
