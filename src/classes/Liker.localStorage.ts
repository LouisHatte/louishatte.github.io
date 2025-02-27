import { writable, get } from "svelte/store";

import { db, onValue, ref, set } from "@/apis/firebase";
import { IS_PRODUCTION } from "@/constants";

const LIKER = "liker";

export class Liker {
  static init() {
    Liker._sanitizeValue();
  }

  private static _sanitizeValue() {
    const rawLiker = localStorage.getItem(LIKER);
    if (rawLiker === null) {
      localStorage.setItem(LIKER, "false");
      return false;
    }

    if (rawLiker !== "false" && rawLiker !== "true") {
      localStorage.setItem(LIKER, "false");
      return false;
    }
    return !!rawLiker;
  }

  static isLiked() {
    return Liker._sanitizeValue();
  }

  static async like() {
    liked.set(true);
    await set(likesRef, get(likes) + 1);
    localStorage.setItem(LIKER, "true");
  }
}

export const likes = writable(0);
export const liked = writable(Liker.isLiked());

const refName = IS_PRODUCTION ? "likes" : "likesLocal";
const likesRef = ref(db, refName);

onValue(likesRef, (snapshot) => {
  if (snapshot.exists()) {
    likes.set(snapshot.val());
  }
});

// Keep like button style synchronized between all tabs of the same browser.
window.addEventListener("storage", (event) => {
  if (event.key !== LIKER || event.newValue === null) return;
  liked.set(JSON.parse(event.newValue));
});
