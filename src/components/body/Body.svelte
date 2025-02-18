<script lang="ts">
  import { onMount } from "svelte";

  import Coin from "@/components/canvas/Coin.svelte";
  import Coins from "@/components/canvas/Coins.svelte";
  import Presentation from "@/components/body/Presentation.svelte";
  import ChatBot from "@/components/body/ChatBot.svelte";
  import Projects from "@/components/body/Projects.svelte";

  const divs: HTMLDivElement[] = [];
  let currentDivIndex = 0;

  const handleWheel = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      const nextDiv = divs[currentDivIndex + 1];
      if (nextDiv) {
        currentDivIndex += 1; // Move to the next div
        nextDiv.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  onMount(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  });
</script>

<div bind:this={divs[0]} class="scroll-div">
  <h1>First Div Content</h1>
  <p>Scroll to the next div...</p>
</div>

<div bind:this={divs[1]} class="scroll-div">
  <h1>Second Div Content</h1>
  <p>Scroll to the next div...</p>
</div>

<!-- <div class="main">
  <div class="first-row">
    <div class="left-column">
      <Presentation />
      <ChatBot />
    </div>
    <div class="right-column">
      <Coins />
    </div>
  </div>
  <div class="second-row">
    <Projects />
  </div>
</div> -->

<style lang="scss">
  .scroll-div {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    margin: 10px 0;
    background-color: #f0f0f0;
  }

  .main {
    display: flex;
    flex-direction: column;
    margin: var(--s32);

    .first-row {
      display: flex;
      margin-bottom: var(--s64);

      .left-column {
        width: 50%;
      }

      .right-column {
        width: 50%;
      }
    }
    .second-row {
      display: flex;
      justify-content: center;
    }
  }
</style>
