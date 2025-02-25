<script lang="ts">
  import { locale } from "svelte-i18n";

  import { Locale, type TLocale } from "@/classes/Locale";
  import Button from "@/lib/buttons/Button.svelte";
  import { logEvent } from "firebase/analytics";
  import { analytics } from "@/apis/firebase";

  function switchLocale(locale: TLocale) {
    Locale.switch(locale);
    logEvent(analytics, `${locale}-button`);
  }
</script>

<div class="switch" data-lang={$locale}>
  <Button onclick={() => switchLocale("en")}>English</Button>
  <Button onclick={() => switchLocale("fr")}>Français</Button>
  <div class="underline"></div>
</div>

<style lang="scss">
  .switch {
    position: relative;
    display: flex;
    gap: var(--s24);
    cursor: pointer;

    .underline {
      width: 50%;
      position: absolute;
      left: 0;
      bottom: -10px;
      height: 2px;
      background: var(--color1);
      border-radius: var(--border-radius);
      transition: transform 0.3s ease-in-out;
    }

    &[data-lang="fr"] {
      .underline {
        transform: translateX(100%);
      }
    }
  }
</style>
