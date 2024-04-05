<script lang="ts">
    export let form;
</script>

{#if form?.missing}
    <div>Fill all the feilds before submitting</div>
{/if}

<form action="/" method="post">
    <input type="text" name="aadharnumber" required />
    <input type="text" name="username" required />
    <input type="password" name="password" required />
    <button>Submit</button>
</form>