<script lang="ts">
  import Presentation from "@/components/body/Presentation.svelte";
  import Projects from "@/components/body/Projects.svelte";
  import ChatBot from "./ChatBot.svelte";
  import Coins from "../canvas/Coins.svelte";
</script>

<div class="main">
  <div class="left-section">
    <Presentation />
    <ChatBot />
  </div>
  <div class="right-section">
    <Coins />
  </div>
</div>
<Projects />

<style lang="scss">
  .main {
    display: flex;

    .left-section {
      width: 50%;
    }

    .right-section {
      width: 50%;
    }
  }
</style>
