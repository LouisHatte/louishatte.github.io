<script lang="ts">
  import { onMount } from "svelte";
  import { fade, scale } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import Presentation from "./Presentation.svelte";
  import ChatBot from "./ChatBot.svelte";
  import Projects from "./Projects.svelte";
  import Coins from "../canvas/Coins.svelte";
  import {
    goToPreviousView,
    gotToNextView,
    view,
  } from "@/stores/viewIndex.svelte";

  const ALL_ANIMATION_DURATION = 5000;
  let isTransitioning = false;
  let timeoutId: NodeJS.Timeout;

  function handleWheel(event: WheelEvent) {
    if (isTransitioning) return;

    isTransitioning = true;

    if (event.deltaY > 0) {
      gotToNextView();
    } else {
      goToPreviousView();
    }

    timeoutId = setTimeout(() => {
      isTransitioning = false;
    }, ALL_ANIMATION_DURATION);
  }

  onMount(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(timeoutId);
    };
  });
</script>

<div class="main">
  {#if $view.name === "preview"}
    <div
      in:scale={{
        start: 0,
        duration: ALL_ANIMATION_DURATION,
        easing: cubicOut,
      }}
      class="one"
    >
      <Coins />
    </div>
  {:else if $view.name === "introduction"}
    <div
      in:fade={{ duration: ALL_ANIMATION_DURATION, easing: cubicOut }}
      class="two"
    >
      <Presentation />
      <ChatBot />
    </div>
  {:else if $view.name === "projects"}
    <div
      in:fade={{ duration: ALL_ANIMATION_DURATION, easing: cubicOut }}
      class="three"
    >
      <Projects />
    </div>
  {/if}
</div>

<style lang="scss">
  .main {
    flex-grow: 1;
    height: 100%;

    .one {
      // position: absolute;
      // width: 100%;
      height: 100%;
    }
    .two {
      // position: absolute;
      // width: 100%;
      height: 100%;
    }
    .three {
      // position: absolute;
      // width: 100%;
      height: 100%;
    }
  }
</style>
