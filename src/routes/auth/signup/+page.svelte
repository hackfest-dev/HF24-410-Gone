<script lang="ts">
    export let form;
</script>

{#if form?.missing}
    <div>Fill all the feilds before submitting</div>
{/if}

<div class="container" id="container" style="margin-left: 190px;">
    <div class="form-container sign-up">
        
    </div>
    <div class="form-container sign-in">
        <form method="post">
            <h1 style="font-size: 25px;">Sign Up</h1>
           
            <p style="margin-right:80px;">Enter your aadhar number</p>
            <input type="text" name="aadharnumber" required />
            <p style="margin-right:120px">enter your username</p>
            <input type="text" name="username" required />
            <p style="margin-right:80px">Please enter your password:</p>
            <input type="password" name="password" required />
            <button>Submit</button>
        </form>
    </div>
    <div class="toggle-container">
        <div class="toggle">
            <div class="toggle-panel toggle-right">
                <h1> Registered ?</h1>
                <p>Sign in then</p>
                <button style= "background-color:#1E293B">Sign In</button>
            </div>
        </div>
    </div>
</div>


<style>
    body {
        background-color: #1E293B;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
        margin: 0; /* Remove default body margin */
         /* Added line */
    }

    .container {
        background-color: #1E293B; /* Match body background */
        border-radius: 30px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
        position: relative;
        overflow: hidden;
        width: 768px;
        max-width: 100%;
        min-height: 480px;
    }
    

    .container p {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.3px;
        margin: 20px 0;
        color: #fff;
    }

    .container span {
        font-size: 12px;
        color: #fff;
    }

    .container a {
        color: #c9d6ff;
        font-size: 13px;
        text-decoration: none;
        margin: 15px 0 10px;
    }

    .container button {
        background-color: #334155;
        color: #fff;
        font-size: 12px;
        padding: 10px 45px;
        border: 1px solid transparent;
        border-radius: 8px;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-top: 10px;
        cursor: pointer;
    }

    .container button.hidden {
        background-color: transparent;
    }

    .container form {
        background-color: #1E293B; /* Match body background */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        height: 100%;
    }

    .container p {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.3px;
        margin: 15px 0; /* Updated margin */
        color: #fff;
    }

    .container input {
        background-color: #222;
        border: none;
        margin: 5px 0 10px; /* Updated margin */
        padding: 10px 15px;
        font-size: 13px;
        border-radius: 8px;
        width: calc(100% - 30px); /* Adjusted width to account for padding */
        outline: none;
        color: #fff;
    }

    .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }

    .sign-in {
        left: 0;
        width: 50%;
        z-index: 2;
    }

    .container.active .sign-in {
        transform: translateX(100%);
    }

    .sign-up {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
        transition: all 0.5s;
    }

    .container.active .sign-up {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: move 0.6s;
    }

    @keyframes move {
        0%, 49.99% {
            opacity: 0;
            z-index: 1;
        }

        50%, 100% {
            opacity: 1;
            z-index: 5;
        }
    }

    .social-icons {
        margin: 20px 0;
    }

    .toggle-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 54%;
        height: 100%;
        overflow: hidden;
        transition: all 0.6s ease-in-out;
        border-radius: 150px 0 0 100px;
        z-index: 1000;
    }

    .container.active .toggle-container {
        transform: translateX(-100%);
        border-radius: 0 150px 100px 0;
    }

    .toggle {
        background-color: #334155;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transition: all 0.6s ease-in-out;
    }

    .container.active .toggle {
        transform: translateX(50%);
    }

    .toggle-panel {
        position: absolute;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 30px;
        text-align: center;
        top: 0;
        transition: all 0.6s ease-in-out;
    }

    .toggle-left {
        transform: translateX(-200%);
    }

    .container.active .toggle-left {
        transform: translateX(0);
    }

    .toggle-right {
        right: 0;
        transform: translateX(0);
    }

    .container.active .toggle-right {
        transform: translateX(200%);
    }
</style>

