<script lang="ts">
  import Button from "@/lib/buttons/Button.svelte";
  import { updateTheme } from "@/lib/styles/colors";
</script>

<Button onclick={updateTheme}>
  <div class="loader"></div>
</Button>

<style lang="scss">
  .loader {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;

    &:after,
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 48px;
      height: 48px;
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
