<script lang="ts">
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import { _ } from "svelte-i18n";

  import GlobalStyle from "@/GlobalStyle.svelte";
  import Stars from "@/components/canvas/Stars.svelte";
  import TopBar from "@/components/top-bar/TopBar.svelte";
  import Footer from "@/components/footer/Footer.svelte";
  import Body from "@/components/body/Body.svelte";
  import Crosshair from "@/lib/misc/Crosshair.svelte";
  import ToastBox from "@/lib/toasts/ToastBox.svelte";
  import { modal, type ModalContent } from "@/stores/modals";

  import "@/global.scss";
  import ContactForm from "@/components/body/ContactForm.svelte";
  import Modal from "@/lib/modals/Modal.svelte";
  import type { Component } from "svelte";

  const modalContent: Record<ModalContent, Component> = {
    contact: ContactForm,
  };
  let Content = $derived(modalContent[$modal.content]);
</script>

<Stars />
<Crosshair />
<main>
  {#if !$modal.show}
    <div out:fade={{ duration: 200, easing: cubicInOut }}>
      <!-- <BlackHoleButton /> -->
      <TopBar />
      <Body />
      <Footer />
    </div>
  {/if}

  <ToastBox />
  <GlobalStyle />
  <Modal bind:show={$modal.show} title={$_($modal.content)}>
    <Content />
  </Modal>
</main>

<style>
  main {
    width: 100%;
    max-width: 1434px;
    padding: var(--s24);
  }
</style>
