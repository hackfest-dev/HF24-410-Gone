<script>
  import issue from "$lib/assets/issue.png";

</script>

<div class="container">
  <div class="picture">
    <img src={issue} alt="form pic" style="width: 100%; height: 100%;">
  </div>
  <div class="form-container">
    <form action="#" method="post" enctype="">
      <h1>Varshith Pawar H R</h1>

      <label for="description">Description:</label>
      <textarea id="description" name="description" rows="4" required></textarea>

      <label for="pin">Pin Code:</label>
      <input type="text" id="pin" name="pin" required>

      <label for="department">Department:</label>
      <select id="department" name="department" required>
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
    align-items: center;
    margin: 20px;
  }
  .form-container {
    flex: 1;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .picture {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .picture img {
    max-width: 100%;
    max-height: 100%;
  }

  </style>