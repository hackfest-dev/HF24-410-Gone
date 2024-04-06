<script lang="ts">
    import Issue from "$lib/components/issue.svelte";
    export let data;
    console.log(data);
</script>

{#each data.posts as Post}
<a href="/post/{Post.post.id}">
    <Issue post={Post.post} user={Post.user}/>
    </a>
{/each}