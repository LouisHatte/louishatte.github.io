<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import {
    goToPreviousView,
    gotToNextView,
    isViewTransitioning,
    TRANSITION_VIEW_DURATION,
    view,
  } from "@/stores/view";

  let ViewContent = $derived($view.body);

  function handleWheel(event: WheelEvent) {
    if ($isViewTransitioning) return;

    if (event.deltaY > 0) {
      gotToNextView();
    } else {
      goToPreviousView();
    }
  }

  onMount(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  });
</script>

<div class="main">
  {#key ViewContent}
    <div
      class="body"
      in:fade={{ duration: 500, delay: TRANSITION_VIEW_DURATION + 500 }}
      out:fade={{ duration: 500 }}
    >
      <ViewContent />
    </div>
  {/key}
</div>

<style lang="scss">
  .main {
    height: 1px;
    flex-grow: 1;

    .body {
      height: 100%;
    }
  }
</style>
