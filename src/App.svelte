<script lang="ts">
  import { fade } from "svelte/transition";
  import { cubicIn } from "svelte/easing";
  import { _ } from "svelte-i18n";

  import GlobalStyle from "@/GlobalStyle.svelte";
  import Stars from "@/components/canvas/Stars.svelte";
  import TopBar from "@/components/top-bar/TopBar.svelte";
  import Footer from "@/components/footer/Footer.svelte";
  import Body from "@/components/body/Body.svelte";
  import Crosshair from "@/lib/misc/Crosshair.svelte";
  import ToastBox from "@/lib/toasts/ToastBox.svelte";
  import Dialog, { isDialogOpen } from "@/lib/dialogs/Dialog.svelte";
  import { dialog } from "@/stores/dialog";

  import "@/global.scss";

  let DialogContent = $derived($dialog.body);
</script>

<Stars />
<Crosshair />
<main>
  {#if !$isDialogOpen}
    <div>
      <!-- <BlackHoleButton /> -->
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
    max-width: 1434px;
    padding: var(--s24);
  }
</style>
