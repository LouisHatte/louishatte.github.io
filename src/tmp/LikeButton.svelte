<!-- <script lang="ts">
  import { analytics, logEvent } from "@/apis/firebase";
  import { Liker, likes, liked } from "@/classes/Liker.localStorage";
  import HeartIcon from "@/components/top-bar/HeartIcon.svelte";
  import Button from "@/lib/buttons/Button.svelte";
  import { addToast } from "@/lib/toasts/toasts";

  let displayedLikes = $derived.by(getDisplayedLikes);

  async function onclick() {
    if (!$liked) {
      logEvent(analytics, "like-button");
      Liker.like();
      addToast("Thank you for your support!");
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

<div class="main">
  <Button {onclick}>
    <HeartIcon liked={$liked} />
    {displayedLikes}
  </Button>
</div>

<style lang="scss">
  .main {
    display: flex;
    width: 69px;
  }
</style> -->
