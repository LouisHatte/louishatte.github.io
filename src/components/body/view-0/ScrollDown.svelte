<script lang="ts">
  import { onMount } from "svelte";
  import lottie from "lottie-web";
  import { BASE_URL } from "@/constants";

  let divRef: HTMLDivElement;

  onMount(() => {
    const animation = lottie.loadAnimation({
      container: divRef,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: `${BASE_URL}scroll-down.json`,
    });

    return () => {
      animation.destroy();
    };
  });
</script>

<div bind:this={divRef}></div>

<style lang="ts">
  div {
    height: 70px;
  }
</style>
