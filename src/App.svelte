<script lang="ts">
  import { get } from "svelte/store";
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import { _ } from "svelte-i18n";

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

  import { isMobile } from "@/stores/screenSize";
  import Modal from "@/lib/Modal.svelte";
  import ContactForm from "@/lib/forms/ContactForm.svelte";
  import SendSVG from "@/assets/icons/send.svg";

  let showModal = $state(false);

  function toggleModale() {
    showModal = !showModal;
  }
</script>

<main>
  <Stars />
  {#if !showModal}
    <div out:fade={{ duration: 500, easing: cubicInOut }}>
      <!-- <Bitcoin /> -->
      <!-- <Coins /> -->
      <!-- <Displacement /> -->
      <!-- <Marble /> -->
      <!-- <Wall /> -->

      <!-- <Test /> -->
      <LanguageButton />
      <Button onClick={toggleModale}>
        <img src={SendSVG} width="40" height="40" alt="S" />
      </Button>
      <!-- <ButtonBar /> -->
      <!-- <Crosshair /> -->
      <!-- <LanguageButton /> -->
      <!-- <Presentation /> -->
    </div>
  {/if}

  <Modal show={showModal} onClose={toggleModale} title={$_("contact")}>
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
    --border-color: #7b8794;
    /* texts */
    --sub-text-color: #cbd2d9;
    --xl-font-size: 30px;
    --xs-font-size: 13px;
    /* colors */
    --black: #000;
    --white: #fff;
    --error-color: #e66a6a;
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

    button,
    textarea {
      background: transparent;
      border: none;
    }

    button {
      cursor: pointer;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus {
      box-shadow: 0 0 0px 1000px transparent inset; /* Transparent background */
      -webkit-text-fill-color: #fff; /* Keep the text color consistent */
      transition: background-color 5000s ease-in-out 0s; /* Prevent color from flashing */
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
