<script lang="ts">
  import { fade } from "svelte/transition";

  import { _ } from "@/classes/Locale";
  import Stars from "@/components/Stars.svelte";
  import TopBar from "@/components/top-bar/TopBar.svelte";
  import Body from "@/components/body/Body.svelte";
  import Footer from "@/components/footer/Footer.svelte";
  import Crosshair from "@/lib/misc/Crosshair.svelte";
  import ToastBox from "@/lib/toasts/ToastBox.svelte";
  import Dialog, { isDialogOpen } from "@/lib/dialogs/Dialog.svelte";
  import { dialog } from "@/stores/dialog";
  import { isMobile } from "@/stores/screenSize";

  import GlobalStyle from "@/GlobalStyle.svelte";
  import "@/global.scss";

  let DialogContent = $derived($dialog.body);
</script>

<GlobalStyle />
{#if !$isMobile}
  <Stars />
{/if}
<Crosshair />
<main>
  {#if $isMobile}
    <div class="screen-warning">
      {$_("main-mobile-warning")}
    </div>
  {:else}
    {#if !$isDialogOpen}
      <div class="portfolio" transition:fade={{ duration: 500 }}>
        <TopBar />
        <Body />
        <Footer />
      </div>
    {/if}

    <ToastBox />
    <Dialog title={$_($dialog.title)}>
      <DialogContent />
    </Dialog>
  {/if}
</main>

<style lang="scss">
  main {
    width: 100%;
    max-width: 2100px;
    padding: var(--s24);

    .screen-warning {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: var(--l-font-size);
    }

    .portfolio {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
