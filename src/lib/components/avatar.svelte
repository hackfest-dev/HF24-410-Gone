<script lang="ts">
  export let user: User;

  import { createAvatar } from "@dicebear/core";
  import { identicon } from "@dicebear/collection";

  const avatar = createAvatar(identicon, {
    seed: user.username,
    // ... other options
  }).toDataUriSync();
</script>

<img class="avatar" src={avatar} alt={user.username} />

<style>
  img {
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }
</style>
