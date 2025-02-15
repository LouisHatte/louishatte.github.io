<script lang="ts">
  import Button, { type ButtonProps } from "@/lib/buttons/Button.svelte";

  let { _class, ...rest }: ButtonProps = $props();
</script>

<Button _class={"_glow " + _class} {...rest} />

<style lang="scss">
  :global(._glow) {
    position: relative;
    padding: 0 !important;

    &:before {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      z-index: var(--z-last);
      background: linear-gradient(
        45deg,
        #4c4c4c,
        #909090,
        #e0e0e0,
        #ababab,
        #aeaeae,
        #363636,
        #424242,
        #636363,
        #4c4c4c
      );
      background-size: 400%;
      border-radius: var(--border-radius);
      // filter: blur(5px);
      opacity: 0;
      animation: glowing 20s linear infinite;
      transition: opacity 0.2s ease-in-out;
      border: solid 1px red;
      padding: 0;
    }

    &:active {
      color: var(--color9);
    }

    &:hover:before {
      opacity: 1;
    }
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
</style>
