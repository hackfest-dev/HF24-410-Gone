<div class="navbar">
  <a href="/" class="icons"><iconify-icon icon="mdi:home"></iconify-icon></a>
  <a href="/post/create" class="icons"><iconify-icon icon="ic:baseline-plus"></iconify-icon></a>
  <a href="/map" class="icons"><iconify-icon icon="bx:map-pin"></iconify-icon></a>
  <a href="/" class="icons"><iconify-icon icon="subway:tick" ></iconify-icon></a>
</div>
  
<style>
  .navbar {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.4rem;
    left: 2rem;
    width: 70px; /* Adjust as needed */
    height: 70vh;
    background: linear-gradient(to bottom, #26334b, #334155); /* Linear gradient background */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0; /* Adjust as needed */
    border-radius: 20px; /* Add border radius */
    overflow: hidden; /* Hide overflowing icons */
   
  }

  .icons {
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    text-decoration: none;
    margin-bottom: 10px; /* Adjust as needed */
    transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s; /* Smooth transition on hover */
    position: relative;
    z-index: 1; /* Ensure icons stay on top */
  }

  .icons::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    border-radius: inherit;
    z-index: -1; /* Place behind the icon */
    opacity: 0;
    transition: opacity 0.3s;
    box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.5); /* Add glassy effect */
  }

  .icons:hover::before {
    opacity: 1;
  }

  .icons:hover {
    background-color: #ddd;
    transform: translateY(-5px); /* Move icon up slightly on hover */
  }
</style>
