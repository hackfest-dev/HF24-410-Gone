<script>
    import Issue from "$lib/components/issue.svelte";
    export let data;
    console.log(data)
</script>




{#each data.posts as post}
<a href="/post/{post.id}">
    <Issue data={post}/>
    </a>
{/each}