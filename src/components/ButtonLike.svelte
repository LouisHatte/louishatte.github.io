<script lang="ts">
  import { analytics, logEvent } from "@/apis/firebase";
  import { Liker, likes, liked } from "@/classes/Liker";
  import HeartIcon from "@/components/HeartIcon.svelte";
  import Button from "@/lib/buttons/Button.svelte";
  import { addToast } from "@/lib/toasts/toasts";

  let displayedLikes = $derived.by(getDisplayedLikes);

  async function onclick() {
    if (!$liked) {
      Liker.like();
      logEvent(analytics, "like-button");
      addToast("Thank you for your support!");
    } else {
      Liker.dislike();
      logEvent(analytics, "dislike-button");
    }
  }

  function getDisplayedLikes() {
    if ($likes >= 1_000_000) {
      return (
        ($likes / 1_000_000).toFixed($likes % 1_000_000 === 0 ? 0 : 1) + "M"
      );
    }
    if ($likes >= 1_000) {
      return ($likes / 1_000).toFixed($likes % 1_000 === 0 ? 0 : 1) + "k";
    }
    return $likes.toString();
  }
</script>

<Button {onclick}>
  <HeartIcon liked={$liked} />
  {displayedLikes}
</Button>
