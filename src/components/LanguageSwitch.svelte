<script lang="ts">
  import { locale } from "svelte-i18n";

  import { Locale } from "@/classes/Locale";
  import Button from "@/lib/buttons/Button.svelte";
</script>

<div class="switch" data-lang={$locale}>
  <Button onclick={Locale.switch}>English</Button>
  <Button onclick={Locale.switch}>Français</Button>
  <div class="underline"></div>
</div>

<style lang="scss">
  .switch {
    display: flex;
    gap: var(--s24);
    cursor: pointer;
    position: relative;

    .underline {
      width: 50%;
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      background: white;
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
