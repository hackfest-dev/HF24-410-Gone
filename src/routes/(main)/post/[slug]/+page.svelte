<script>
    export let data;
</script>

<form method="post">
    <input type="text" name="content">
    <button type="submit">comment</button>
</form>

<form action="/?upVote" method="post">
    <button type="submit">upvote</button>
</form>

<form action="/?downVote" method="post">
    <button type="submit">downvote</button>
</form>

<img src={data.post[0].image} alt={"data.newImage?.toString()"}>