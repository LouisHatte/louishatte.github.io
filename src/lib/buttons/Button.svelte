<script lang="ts" module>
  export type ButtonProps = StyleProps & {
    children: Snippet;
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    type?: "button" | "submit" | "reset" | null;
  };
</script>

<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    _class,
    children,
    disabled,
    onclick,
    style,
    type = "button",
  }: ButtonProps = $props();
</script>

<button class={`glow ${_class}`} {style} {type} {disabled} {onclick}>
  {@render children()}
</button>

<style lang="scss">
  button {
    padding: var(--s8);
    background-color: transparent;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--s8);
  }

  .glow {
    position: relative;

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
      filter: blur(5px);
      opacity: 0;
      animation: glowing 20s linear infinite;
      transition: opacity 0.2s ease-in-out;
    }

    &:active {
      color: var(--black);
    }

    &:hover:before,
    &:focus:before {
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
