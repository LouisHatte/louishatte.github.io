<script lang="ts">
  import IntroductionSection from "./introduction/IntroductionSection.svelte";
  import ChatBotSection from "./chat-bot/ChatBotSection.svelte";
  import CoinSection from "./coin/CoinSection.svelte";
  import ProjectsSection from "./projects/ProjectsSection.svelte";
</script>

<div class="main">
  <IntroductionSection />
  <ChatBotSection />
  <!-- <CoinSection /> -->
  <ProjectsSection />
</div>

<style lang="scss">
  .main {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: var(--s12);
    align-items: start;
    justify-content: start;
    border: solid 3px cyan;
  }
</style>
