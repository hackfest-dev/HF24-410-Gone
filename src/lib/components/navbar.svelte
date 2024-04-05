<script>
    let buttons = ["Button 1", "Button 2", "Button 3", "Button 4"];
  </script>
  
  
<style>
    .navbar {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
      left: 2rem;
      width: 70px; /* Adjust as needed */
      height: 70vh;
      background-color: #333;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0; /* Adjust as needed */
      border-radius: 22px;
    }
  
    .button {
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
    }
  
    .button:hover {
      background-color: #ddd;
    }
  </style>
  
  <div class="navbar">
    <div class="button"></div>
    <div class="button"></div>
    <div class="button"></div>
    <div class="button"></div>
  </div>