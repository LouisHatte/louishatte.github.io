<script lang="ts">
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import { _ } from "svelte-i18n";

  import Button from "@/lib/buttons/Button.svelte";
  import Modal from "@/lib/modals/Modal.svelte";
  import ToastBox from "@/lib/toasts/ToastBox.svelte";

  import ButtonLanguage from "@/components/ButtonLanguage.svelte";
  import ContactForm from "@/components/ContactForm.svelte";
  import Stars from "@/components/canvas/Stars.svelte";

  import SendSVG from "@/assets/icons/send.svg";
  import Crosshair from "./lib/misc/Crosshair.svelte";

  let showContactModal = $state(false);

  function openContactModal() {
    showContactModal = true;
  }
</script>

<main>
  <Stars />
  <Crosshair />
  {#if !showContactModal}
    <div out:fade={{ duration: 500, easing: cubicInOut }}>
      <ButtonLanguage />
      <Button onClick={openContactModal}>
        <img src={SendSVG} width="40" height="40" alt="S" />
      </Button>
    </div>
  {/if}

  <ToastBox />
  <Modal bind:show={showContactModal} title={$_("contact")}>
    <ContactForm />
  </Modal>
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
    --border-radius-mobile: 20px;
    --border-color: #7b8794;

    /* texts */
    --sub-text-color: #cbd2d9;
    --xl-font-size: 30px;
    --xs-font-size: 13px;

    /* colors */
    --black: #000;
    --white: #fff;
    --error-color: #e66a6a;

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
    }

    button {
      background: transparent;
      border: none;
      cursor: pointer;
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
</style>
