<script lang="ts">
  import { get } from "svelte/store";
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import { _ } from "svelte-i18n";
  import { setContext } from "svelte";

  import Bitcoin from "@/lib/canvas/Bitcoin.svelte";
  import Coins from "@/lib/canvas/Coins.svelte";
  import Displacement from "@/lib/canvas/Displacement.svelte";
  import Marble from "@/lib/canvas/Marble.svelte";
  import Stars from "@/lib/canvas/Stars.svelte";
  import Wall from "@/lib/canvas/Wall.svelte";

  import Button from "@/lib/buttons/Button.svelte";
  import ButtonBar from "@/lib/buttons/ButtonBar.svelte";
  import Crosshair from "@/lib/misc/Crosshair.svelte";
  import LanguageButton from "@/lib/buttons/LanguageButton.svelte";
  import Presentation from "@/lib/Presentation.svelte";
  import Test from "@/lib/Test.svelte";

  import Modal from "@/lib/modals/Modal.svelte";
  import ContactForm from "@/lib/forms/ContactForm.svelte";
  import SendSVG from "@/assets/icons/send.svg";
  import ModalMobile from "./lib/modals/ModalMobile.svelte";
  import ToastBox from "./lib/toasts/ToastBox.svelte";

  import { addToast } from "@/stores/toasts";
  import ModalBox from "./lib/modals/ModalBox.svelte";
  import { modalState, openModal } from "./stores/modal";

  function showSuccessToast() {
    addToast("This is a success message!", "success", 6000);
  }

  function showErrorToast() {
    addToast("This is an error message!", "error", 6000);
  }

  function showInfoToast() {
    addToast("This is an info message!", "info", 6000);
  }

  function openContactModal() {
    console.log("OPEN_MODAL: ", openModal);
    // @ts-expect-error
    openModal(ContactForm, $_("contact"));
  }
</script>

<main>
  <Stars />
  {#if !$modalState.show}
    <div out:fade={{ duration: 500, easing: cubicInOut }}>
      <!-- <Bitcoin /> -->
      <!-- <Coins /> -->
      <!-- <Displacement /> -->
      <!-- <Marble /> -->
      <!-- <Wall /> -->

      <!-- <Test /> -->
      <LanguageButton />
      <Button onClick={openContactModal}>
        <img src={SendSVG} width="40" height="40" alt="S" />
      </Button>
      <!-- <ButtonBar /> -->
      <!-- <Crosshair /> -->
      <!-- <LanguageButton /> -->
      <!-- <Presentation /> -->
    </div>
  {/if}

  <button onclick={showSuccessToast}>Show Success Toast</button>
  <button onclick={showErrorToast}>Show Error Toast</button>
  <button onclick={showInfoToast}>Show Info Toast</button>

  <ModalBox />
  <ToastBox />
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
  }

  :global {
    html,
    body,
    #app {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      font-family: "Space Grotesk";
    }

    * {
      margin: 0;
      padding: 0;
      outline: none;
      color: #fff;
      font-size: 16px;
      box-sizing: border-box;
    }

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }

    /* Remove autofill browser style */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus {
      box-shadow: 0 0 0px 1000px transparent inset;
      -webkit-text-fill-color: #fff;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
