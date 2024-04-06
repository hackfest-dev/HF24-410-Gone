<script lang="ts">
    import DeptIssue from "$lib/components/deptIssue.svelte";
import Issue from "$lib/components/issue.svelte";
    export let data;
    console.log(data);
</script>
{#if data.user.type === "Citizen"}

{#each data.posts as Post}
<a href="/post/{Post.post.id}">
    <Issue post={Post.post} user={Post.user}/>
    </a>
{/each}

{/if}
{#if data.user.type === "Department"}
{#each data.posts as Post}
<a href="/post/{Post.post.id}">
   <DeptIssue data={Post}/>
    </a>
{/each}
{/if}