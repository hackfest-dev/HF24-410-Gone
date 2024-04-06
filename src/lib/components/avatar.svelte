<script lang="ts">
  import { getProfileImage } from "$lib/utils";
  export let user: User;
</script>

<!-- <img class="avatar" src={getProfileImage(user.username)} alt={user.username} />
 -->
<img class="avatar" />
<style>
  img {
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }
</style>
