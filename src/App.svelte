<script lang="ts">
  import { _ } from "svelte-i18n";

  import Stars from "@/components/Stars.svelte";
  import Crosshair from "@/lib/misc/Crosshair.svelte";
  import TopBar from "@/components/top-bar/TopBar.svelte";
  import Body from "@/components/body/Body.svelte";
  import Footer from "@/components/footer/Footer.svelte";
  import ToastBox from "@/lib/toasts/ToastBox.svelte";
  import Dialog, { isDialogOpen } from "@/lib/dialogs/Dialog.svelte";
  import { dialog } from "@/stores/dialog";

  import GlobalStyle from "@/GlobalStyle.svelte";
  import "@/global.scss";

  let DialogContent = $derived($dialog.body);
</script>

<Stars />
<Crosshair />
<main>
  {#if !$isDialogOpen}
    <div class="portfolio">
      <TopBar />
      <Body />
      <Footer />
    </div>
  {/if}

  <ToastBox />
  <GlobalStyle />
  <Dialog title={$_($dialog.title)}>
    <DialogContent />
  </Dialog>
</main>

<style>
  main {
    width: 100%;
    max-width: 1500px;
    padding: var(--s24);
  }

  .portfolio {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
