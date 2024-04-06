<script>
    export let data;
    console.log(data.newImage);
</script>

<div class="bg-base-100 shadow-xl">
    <div class="card lg:card-side">
        <figure class="w-[40%]">
            <img
                src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
            />
        </figure>
        <div class="card-body w-[60%]">
            <h2 class="card-title">water issue</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur nobis quos dolor. Perspiciatis nobis optio, id
                ducimus consequatur architecto, mollitia officia excepturi
                dolores expedita iusto! Sequi aspernatur porro voluptates
                distinctio!
            </p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
            </div>
        </div>
    </div>

    <div class="w-full p-8">
        <strong class="mt-5">Comments</strong>
        <form method="post" class="mt-6 w-full flex gap-6 p-5">
            <input
                type="text"
                placeholder="comment"
                name="content"
                class="input input-bordered w-full"
            />
            <button type="submit">Send</button>
        </form>

        <form method="post">
            <input type="text" name="content" />
            <button type="submit">comment</button>
        </form>

        <form action="/?upVote" method="post">
            <button type="submit">upvote</button>
        </form>

        <form action="/?downVote" method="post">
            <button type="submit">downvote</button>
        </form>
    </div>
</div>

<style>
    .card {
        border-radius: 16px 16px 0 0;
    }
</style>
