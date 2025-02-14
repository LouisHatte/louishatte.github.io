<script lang="ts">
  import IntroductionSection from "./introduction/IntroductionSection.svelte";
  import ChatBotSection from "./chat-bot/ChatBotSection.svelte";
  import CoinSection from "./coin/CoinSection.svelte";
  import ContactSection from "./contact/ContactSection.svelte";
  import ProjectsSection from "./projects/ProjectsSection.svelte";
</script>

<div class="main">
  <IntroductionSection />
  <!-- <ChatBotSection /> -->
  <!-- <CoinSection /> -->
  <!-- <ContactSection /> -->
  <!-- <ProjectsSection /> -->
</div>

<style lang="scss">
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    // width: 100%;
    // height: 100%;
    gap: var(--s12);
    overflow: hidden;
  }
</style>
