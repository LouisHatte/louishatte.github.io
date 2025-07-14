<script lang="ts">
  import Presentation from "@/components/body/view-1/Presentation.svelte";
  import ChatBot from "@/components/body/view-1/ChatBot.svelte";
</script>

<div class="main">
  <Presentation />
  <div class="right-box">
    <ChatBot />
  </div>
</div>

<style lang="scss">
  .main {
    height: 100%;
    display: flex;
    justify-content: center;
    padding: var(--s64);
    gap: var(--s48);

    .right-box {
      max-width: 850px;
      flex: 1;
    }
  }
</style>
