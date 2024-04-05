<script lang="ts">
    export let form;
</script>

{#if form?.missing}
    <div>Fill all the feilds before submitting</div>
{/if}
{#if form?.incorrect}
    <div>Invalid Credentials</div>
{/if}

<form action="/login" method="post">
    <input type="text" name="username" required />
    <input type="password" name="password" />
    <button>Submit</button>
</form>
