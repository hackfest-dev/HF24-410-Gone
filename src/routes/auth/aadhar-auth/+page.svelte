<script lang="ts">
    export let form;
</script>

{#if form?.missing}
    <div>
        Fill all the feilds before submitting
    </div>
{/if}


<form action="/?submit" method="post">
    <input type="text" name="aadharnumber" required value={form?.aadharNumber??""}/>
    <button formaction="?/verify">Verify</button>

    {#if form?.verified}
        <input type="text" name="otp" />
        <button formaction="?/submit">Submit</button>
    {/if}
</form>
