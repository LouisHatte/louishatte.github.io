<script lang="ts">
  import { analytics, logEvent } from "@/apis/firebase";
  import Button from "@/lib/buttons/Button.svelte";
  import { updateTheme } from "@/lib/styles/colors";

  function onclick() {
    logEvent(analytics, "mystery-button");
    updateTheme();
  }
</script>

<Button {onclick}>
  <div class="loader"></div>
</Button>

<style lang="scss">
  .loader {
    width: var(--s48);
    height: var(--s48);
    display: inline-block;
    position: relative;

    &:after,
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: var(--s48);
      height: var(--s48);
      border-radius: 50%;
      background: var(--color1);
      animation: loading 2s linear infinite;
    }

    &:after {
      animation-delay: 1s;
      opacity: 0;
    }
  }

  @keyframes loading {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
</style>
