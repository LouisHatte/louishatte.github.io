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
</script>

<main>
  <!-- <Bitcoin /> -->
  <!-- <Coins /> -->
  <!-- <Displacement /> -->
  <!-- <Marble /> -->
  <Stars />
  <!-- <Wall /> -->

  <!-- <Test /> -->
  <Modal show title={$_("contact")}>
    <Form />
  </Modal>
  <!-- <Button>A</Button> -->
  <!-- <ButtonBar /> -->
  <!-- <Crosshair /> -->
  <!-- <LanguageButton /> -->
  <Presentation />
</main>

<style>
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
  }
  main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
