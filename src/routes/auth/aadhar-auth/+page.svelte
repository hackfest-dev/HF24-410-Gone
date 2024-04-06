<script lang="ts">
    export let form;
</script>

<div class="login-container">
    <h2 style="color: white;">Verification</h2>
    {#if form?.missing}
    <div class="error-message">
        Fill all the fields before submitting
    </div>
    {/if}
    <form action="/?submit" method="post">
        <input type="text" name="aadharnumber" placeholder="Enter Aadhar Number" required value={form?.aadharNumber??""}/>
        <button type="submit" formaction="?/verify">Verify</button>
    
        {#if form?.verified}
        <input type="text" name="otp" placeholder="Enter OTP" required />
        <button type="submit" formaction="?/submit">Submit</button>
        {/if}
    </form>
</div>

<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #1E293B;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
       
    }
    
    .login-container {
        background-color: #1E293B;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        width: 300px;
        text-align: center;
        margin: 9rem;
        margin-left: 20rem;
    }
    
    .login-container h2 {
        margin-top: 0;
        color: #fff;
    }
    
    .login-container input[type="text"],
    .login-container input[type="password"] {
        width: calc(100% - 20px);
        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
    }
    
    .login-container input[type="submit"],
    .login-container button {
        width: calc(100% - 20px);
        margin: 10px;
        padding: 10px;
        background-color: #4caf50;
        border: none;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .login-container input[type="submit"]:hover,
    .login-container button:hover {
        background-color: #45a049;
    }
    
    .error-message {
        color: red;
        font-size: 14px;
    }
</style>
