<script lang="ts">
  import Presentation from "@/components/body/Presentation.svelte";
  import Projects from "@/components/body/Projects.svelte";
  import ChatBot from "./ChatBot.svelte";
  import Coins from "../canvas/Coins.svelte";
  import Coin from "@/components/canvas/Coin.svelte";
</script>

<div class="main">
  <div class="first-row">
    <div class="left-column">
      <Presentation />
      <ChatBot />
    </div>
    <div class="right-column">
      <Coin />
    </div>
  </div>
  <div class="second-row">
    <Projects />
  </div>
</div>

<style lang="scss">
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
