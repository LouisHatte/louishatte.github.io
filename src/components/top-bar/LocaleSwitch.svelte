<script lang="ts">
  import { onMount } from "svelte";

  import { analytics, logEvent } from "@/apis/firebase";
  import { _, Locale, type TLocale, locale } from "@/classes/Locale";
  import Button from "@/lib/buttons/Button.svelte";

  let enButton: HTMLButtonElement | null = $state(null);
  let frButton: HTMLButtonElement | null = $state(null);

  let underlineWidth = $state(0);
  let underlineLeft = $state(0);

  function updateUnderline() {
    const activeButton = $locale?.startsWith("fr") ? frButton : enButton;
    if (!activeButton) return;

    underlineWidth = activeButton.offsetWidth;
    underlineLeft = activeButton.offsetLeft;
  }

  onMount(updateUnderline);

  $effect(updateUnderline);

  function switchLocale(locale: TLocale) {
    logEvent(analytics, `${locale}-button`);
    Locale.switch(locale);
    updateUnderline();
  }
</script>

<div class="switch" data-lang={$locale}>
  <Button
    bind:buttonRef={enButton}
    onclick={() => switchLocale("en")}
    style={"padding: 0; margin: 0;"}
  >
    English
  </Button>
  <Button
    bind:buttonRef={frButton}
    onclick={() => switchLocale("fr")}
    style={"padding: 0; margin: 0;"}
  >
    Français
  </Button>
  <div
    class="underline"
    style:width="{underlineWidth}px"
    style:left="{underlineLeft}px"
  ></div>
</div>

<style lang="scss">
  .switch {
    position: relative;
    display: flex;
    gap: var(--s24);
    cursor: pointer;

    .underline {
      position: absolute;
      bottom: -5px;
      height: 1.5px;
      background: var(--color1);
      border-radius: var(--border-radius);
      transition:
        left 0.3s ease-in-out,
        width 0.3s ease-in-out;
    }
  }
</style>
