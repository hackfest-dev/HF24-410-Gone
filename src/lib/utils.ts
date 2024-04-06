import { createAvatar } from "@dicebear/core";
import { identicon } from "@dicebear/collection";

export function getProfileImage(username:string){
    return createAvatar(identicon, {
        seed: username,
        // ... other options
      }).toDataUriSync();
}