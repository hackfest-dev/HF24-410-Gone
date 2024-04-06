<script>
    export let data;
    console.log(data.newImage)
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

<!-- <img src={} alt={data.newImage?.toString()}> -->