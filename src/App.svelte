<script lang="ts">
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
</script>

<main>
  <Bitcoin />
  <!-- <Coins /> -->
  <!-- <Displacement /> -->
  <!-- <Marble /> -->
  <Stars />
  <!-- <Wall /> -->

  <!-- <Button>A</Button> -->
  <!-- <ButtonBar /> -->
  <!-- <Crosshair /> -->
  <!-- <LanguageButton /> -->
  <!-- <Presentation /> -->
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
