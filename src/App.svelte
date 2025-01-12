<script lang="ts">
  import { get } from "svelte/store";
  import { _ } from "svelte-i18n";

  import Bitcoin from "@/lib/canvas/Bitcoin.svelte";
  import Coins from "@/lib/canvas/Coins.svelte";
  import Displacement from "@/lib/canvas/Displacement.svelte";
  import Marble from "@/lib/canvas/Marble.svelte";
  import Stars from "@/lib/canvas/Stars.svelte";
  import Wall from "@/lib/canvas/Wall.svelte";

  import Button from "@/lib/Button.svelte";
  import ButtonBar from "@/lib/ButtonBar.svelte";
  import Crosshair from "@/lib/Crosshair.svelte";
  import LanguageButton from "@/lib/LanguageButton.svelte";
  import Presentation from "@/lib/Presentation.svelte";
  import Test from "@/lib/Test.svelte";

  import { isMobile } from "@/stores/screenSize";
  import Modal from "./lib/Modal.svelte";
  import Form from "./lib/Form.svelte";
  import SendSVG from "@/assets/icons/send.svg";

  let show = $state(false);

  function closeModale() {
    show = false;
  }
</script>

<main>
  <!-- <Bitcoin /> -->
  <!-- <Coins /> -->
  <!-- <Displacement /> -->
  <!-- <Marble /> -->
  <Stars />
  <!-- <Wall /> -->

  <!-- <Test /> -->
  <LanguageButton />
  <Button onClick={() => (show = true)}>
    <img src={SendSVG} width="40" height="40" alt="S" />
  </Button>
  <!-- <ButtonBar /> -->
  <!-- <Crosshair /> -->
  <!-- <LanguageButton /> -->
  <!-- <Presentation /> -->

  <Modal {show} onClose={closeModale} title={$_("contact")}>
    <Form />
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
    /* border */
    --border-color: #1f1e1e;
    --border-radius: 6px;
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
    }

    button {
      background: transparent;
      border: none;
      cursor: pointer;
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
