<script lang="ts">
  import type { Snippet } from "svelte";

  type ButtonProps = StyleProps & {
    children: Snippet;
    href?: string;
    onClick?: (e: MouseEvent) => void;
    type?: "button" | "submit" | "reset" | null;
  };

  let {
    children,
    classes,
    href,
    onClick,
    style,
    type = "button",
  }: ButtonProps = $props();
</script>

{#if href}
  <a {href} target="_blank">
    <button class={`glow ${classes}`} {style} {type} onclick={onClick}>
      {@render children()}
    </button>
  </a>
{:else}
  <button class={`glow ${classes}`} {style} {type} onclick={onClick}>
    {@render children()}
  </button>
{/if}

<style lang="scss">
  button {
    padding: var(--s8) var(--s8);
    background-color: transparent;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
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
      z-index: -1;
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
      color: #000;
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
