<script>
    import issue from "$lib/assets/issue.png";
    import Comment from "$lib/components/comment.svelte";
    export let data;
    let isUpvote = false;
    let isDownvote = false;
    let isCommentsClicked = false;
    console.log(data)
    console.log(issue);
</script>

<div class="bg-base-100 shadow-xl">
    <div class="card lg:card-side rounded-none">
        <figure class="w-[40%] h-[25rem]">
            <img
                src={data.post[0].image}
                alt="Album"
                class="object-cover object-center w-full h-full"
            />
        </figure>
        <div class="card-body w-[60%]">
            <h2 class="card-title">{data.post[0].title}</h2>
            <p>
                {data.post[0].description}
            </p>
            <!-- <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
            </div> -->
        </div>
    </div>

    <div class="flex p-5 gap-2">
        {#if !isUpvote}
            <form action="/?upVote" method="post">
                <button
                    on:click={() => {
                        isUpvote = true;
                        isDownvote = false;
                    }}
                    type="submit"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 24 24"
                        ><path
                            fill="currentColor"
                            d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625zM15 12h-1v8h-4v-8H6.081L12 4.601L17.919 12z"
                        />
                    </svg></button
                >
            </form>
        {:else}
            <form action="/?downVote" method="post">
                <button
                    on:click={() => {
                        isUpvote = false;
                    }}
                    type="submit"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 24 24"
                        ><path
                            fill="currentColor"
                            d="M4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14"
                        /></svg
                    ></button
                >
            </form>
        {/if}
        {#if !isDownvote}
            <button
                on:click={() => {
                    isDownvote = true;
                    isUpvote = false;
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 24 24"
                    ><path
                        fill="currentColor"
                        d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059M12 19.399L6.081 12H10V4h4v8h3.919z"
                    /></svg
                >
            </button>
        {:else}
            <button
                on:click={() => {
                    isDownvote = !isDownvote;
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 24 24"
                    ><path
                        fill="currentColor"
                        d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059"
                    /></svg
                >
            </button>
        {/if}
        
            <button
                on:click={() => {
                    isCommentsClicked = true;
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 24 24"
                    ><path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20"
                    /></svg
                >
            </button>
        
    </div>
    {#if isCommentsClicked}
        <div class="w-full p-8">
            <div class="flex items-center mt-5 gap-3">
                <button
                    on:click={() => {
                        isCommentsClicked = false;
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 512 512"
                        ><path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="m112 160l-64 64l64 64"
                        /><path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="32"
                            d="M64 224h294c58.76 0 106 49.33 106 108v20"
                        /></svg
                    ></button
                ><strong class="">Comments</strong>
            </div>
            <form action="?/comment" method="post" class="mt-6 w-full flex gap-6 p-5">
                <input
                    type="text"
                    placeholder="comment"
                    name="content"
                    class="input input-bordered w-full"
                />
                <button type="submit">Send</button>
            </form>
            <div>
                {#each data.comments as comment}
                    <Comment data={comment}/>
                {/each}
            </div>
          
        </div>
    {/if}
</div>

<style>
    .card {
        border-radius: 16px 16px 0 0;
    }
</style>
