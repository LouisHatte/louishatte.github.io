<script>
  import Presentation from "@/components/body/view-1/Presentation.svelte";
  import ChatBot from "@/components/body/view-1/ChatBot.svelte";
</script>

<div class="main">
  <div class="top-box">
    <Presentation />
  </div>
  <div class="bottom-box">
    <ChatBot />
  </div>
</div>

<style lang="scss">
  .main {
    // border: solid 3px red;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: var(--s24);

    .top-box {
      display: flex;
      // height: 60%;
      // border: solid 3px green;
    }

    .bottom-box {
      flex: 1;
      // border: solid 3px blue;
      margin-top: var(--s24);
    }
  }
</style>
