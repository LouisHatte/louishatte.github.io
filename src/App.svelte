<script lang="ts">
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import { _ } from "svelte-i18n";

  import Modal from "@/lib/modals/Modal.svelte";
  import ToastBox from "@/lib/toasts/ToastBox.svelte";

  import ContactForm from "@/components/sections/contact/ContactForm.svelte";
  import Stars from "@/components/canvas/Stars.svelte";

  import Crosshair from "./lib/misc/Crosshair.svelte";
  import GlobalStyle from "./GlobalStyle.svelte";

  import "@/global.scss";

  import { showModal } from "./stores/modals";
  import TopBar from "./components/top-bar/TopBar.svelte";
  import Footer from "./components/footer/Footer.svelte";
  import Sections from "./components/sections/Sections.svelte";
  import ButtonBar from "./components/sections/contact/ButtonBar.svelte";
  import ContactSection from "./components/sections/contact/ContactSection.svelte";
</script>

<Stars />
<!-- <Crosshair /> -->
<main>
  {#if !$showModal}
    <div out:fade={{ duration: 500, easing: cubicInOut }}>
      <TopBar />
      <!-- <Sections /> -->
      <!-- <Footer /> -->
      <ContactSection />
    </div>
  {/if}

  <ToastBox />
  <GlobalStyle />
</main>

<style>
  main {
    width: 100%;
    max-width: 1434px;
    padding: var(--s24);
    /* border: solid 1px cyan; */
  }
</style>
