<script>
  import issue from "$lib/assets/issue.png"; 
  // Assuming you still want the image import (remove if not)
</script>

<div class="container">
  <div class="picture" >
    <img src="{issue}" alt="jj" style="height: 500px;border-top-left-radius:20px ;
    border-bottom-left-radius:20px ;">
    </div>
  <div class="form-container">
    <form action="#" method="post" enctype="">
      <h1>Varshith Pawar H R</h1>

      <label for="description">Description:</label>
      <textarea id="description" name="description" rows="4" style="background-color: #1E293B;
      border:#334155" required></textarea>

      <label for="pin">Pin Code:
        
      </label>
      <input type="text" id="pin" name="pin" required
      style="background-color: #1E293B;
      border:#334155">
      

      <label for="department"
      >Department:</label>
      <select id="department" name="department" 
      style="background-color: #1E293B;
      border:#334155" required>
        <option value="">Select Department</option>
        <option value="department1">Department 1</option>
        <option value="department2">Department 2</option>
        <option value="department3">Department 3</option>
      </select>
      

      <label for="photo">Upload Photo:</label>
      <input type="file" id="photo" name="photo" accept="image/*" required>
     

      <button type="submit">Submit</button>
    </form>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: stretch; /* Ensure equal height columns */
    margin: 20px;
  }
  .form-container {
    flex: 1;
    padding: 20px;
    border: 3px solid #334155;
    border-radius: 20px;
    border-left: none;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .picture {
    flex: 1; /* Maintains equal width with the form container */
    height: 100%; /* Ensure the picture div takes full height */
    display: flex;
    align-items: center;
    justify-content: center;
    border: #334155 3px solid;
    border-right: none;
    border-top-left-radius:20px ;
    border-bottom-left-radius:20px ;
    
  }
  /* Rest of your styles remain the same */
  label {
    display: block;
    margin-bottom: 10px;
  }
  input[type="text"],
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #334155;
    border-radius: 5px;
    box-sizing: border-box;
  }
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #334155;
    border-radius: 5px;
    box-sizing: border-box;
  }
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>
