<script lang="ts">
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import { _ } from "svelte-i18n";

  import Button from "@/lib/buttons/Button.svelte";
  import Modal from "@/lib/modals/Modal.svelte";
  import ToastBox from "@/lib/toasts/ToastBox.svelte";

  import ContactForm from "@/components/ContactForm.svelte";
  import Stars from "@/components/canvas/Stars.svelte";

  import SendSVG from "@/assets/icons/send.svg";
  import Crosshair from "./lib/misc/Crosshair.svelte";
  import ButtonLink from "./lib/buttons/ButtonLink.svelte";
  import GlobalStyle from "./lib/GlobalStyle.svelte";
  import ButtonBar from "./components/ButtonBar.svelte";
  import Spinner from "./lib/spinners/Spinner.svelte";
  import ChatBot from "./components/ChatBot.svelte";
  import Displacement from "./components/canvas/Displacement.svelte";
  import Bitcoin from "./components/canvas/Bitcoin.svelte";
  import Carousel from "./components/Carousel.svelte";

  let showContactModal = $state(false);

  function openContactModal() {
    showContactModal = true;
  }

  const items = [
    { title: "0" },
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "4" },
    { title: "5" },
  ];
</script>

<main>
  <Stars />
  <!-- <Crosshair /> -->
  <!-- <Bitcoin /> -->
  {#if !showContactModal}
    <div class="tmp" out:fade={{ duration: 500, easing: cubicInOut }}>
      <ChatBot />
      <!-- <Carousel {items} /> -->
      <div style="margin-bottom: 24px;"></div>
      <ButtonBar {openContactModal} />
    </div>
  {/if}

  <ToastBox />
  <Modal bind:show={showContactModal} title={$_("contact")}>
    <ContactForm />
  </Modal>
  <GlobalStyle />
</main>

<style>
  :root {
    /* spacing */
    --s4: 4px;
    --s8: 8px;
    --s12: 12px;
    --s16: 16px;
    --s24: 24px;
    --s32: 32px;
    --s48: 48px;
    --s64: 64px;
    --s96: 96px;

    /* borders */
    --border-radius: 6px;
    --border-radius_M: 12px;
    --xl-border-radius_M: 20px;
    --border-color: #7b8794;

    /* texts */
    --sub-text-color: #cbd2d9;
    --xl-font-size: 30px;
    --xs-font-size: 13px;

    /* colors */
    --black: #000;
    --white: #fff;
    --error-color: #e66a6a;

    /* box shadows */
    --white-box-shadow: inset 0px 0px 24px -10px rgba(255, 255, 255, 1);

    /* z-indexes */
    --z-first: 9999;
    --z-second: 1000;
    --z-third: 500;
    --z-fourth: 250;
    --z-last: -1;
  }

  :global {
    html,
    body,
    #app,
    main {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    * {
      margin: 0;
      padding: 0;
      outline: none;
      color: #fff;
      font-size: 16px;
      box-sizing: border-box;
      font-family: "Space Grotesk";
      scrollbar-width: none;
    }

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    /* Remove input autofill browser style */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus {
      box-shadow: 0 0 0 1000px transparent inset;
      -webkit-text-fill-color: var(--white);
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tmp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
