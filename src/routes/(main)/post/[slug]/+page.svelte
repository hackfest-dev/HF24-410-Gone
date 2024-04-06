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
    <div class="flex p-5 gap-2 justify-between">
        <div class="w-[60%]">
            <h2 class="text-2xl font-bold mb-4">{data.post[0].title}</h2>
            <p class="mb-4">{data.post[0].description}</p>
            <div class="flex gap-2">
                {#if !isUpvote}
                    <form action="/?upVote" method="post">
                        <button
                            on:click={() => {
                                isUpvote = true;
                                isDownvote = false;
                            }}
                            type="submit"
                            class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full focus:outline-none"
                            aria-label="Upvote"
                            title="Upvote"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5rem"
                                height="1.5rem"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 2a10 10 0 0 0-7.5 16.607L12 22l7.5-3.393A10 10 0 0 0 12 2z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </form>
                {:else}
                    <form action="/?downVote" method="post">
                        <button
                            on:click={() => {
                                isUpvote = false;
                                isDownvote = true;
                            }}
                            type="submit"
                            class="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full focus:outline-none"
                            aria-label="Downvote"
                            title="Downvote"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5rem"
                                height="1.5rem"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 22a10 10 0 0 0 7.5-16.607L12 2l-7.5 3.393A10 10 0 0 0 12 22z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </form>
                {/if}
                {#if !isDownvote}
                    <form action="/?downVote" method="post">
                        <button
                            on:click={() => {
                                isDownvote = true;
                                isUpvote = false;
                            }}
                            type="submit"
                            class="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full focus:outline-none"
                            aria-label="Downvote"
                            title="Downvote"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5rem"
                                height="1.5rem"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 22a10 10 0 0 0 7.5-16.607L12 2l-7.5 3.393A10 10 0 0 0 12 22z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </form>
                {:else}
                    <form action="/?upVote" method="post">
                        <button
                            on:click={() => {
                                isDownvote = false;
                                isUpvote = true;
                            }}
                            type="submit"
                            class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full focus:outline-none"
                            aria-label="Upvote"
                            title="Upvote"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5rem"
                                height="1.5rem"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 2a10 10 0 0 0-7.5 16.607L12 22l7.5-3.393A10 10 0 0 0 12 2z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </form>
                {/if}
                <button
                    on:click={() => {
                        isCommentsClicked = !isCommentsClicked;
                    }}
                    class="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full focus:outline-none"
                    aria-label="Comment"
                    title="Comment"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5rem"
                        height="1.5rem"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 2a10 10 0 0 0-7.5 16.607L12 22l7.5-3.393A10 10 0 0 0 12 2z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <figure class="w-[40%] h-[25rem]">
            <img
                src={data.post[0].image}
                alt="Album"
                class="object-cover object-center w-full h-full"
            />
        </figure>
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

</style>
