<script lang="ts">
  import type { Snippet } from "svelte";

  type ButtonProps = {
    classes?: string;
    style?: string;
    href?: string;
    type?: "button" | "submit" | "reset" | null;
    onClick?: (e: MouseEvent) => void;
    children: Snippet;
  };

  let {
    classes,
    style,
    children,
    href,
    onClick,
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

<style>
  button {
    padding: var(--s8) var(--s8);
    background-color: transparent;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
  }

  .glow {
    position: relative;
  }

  .glow:before {
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

  .glow:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: transparent;
    border-radius: var(--border-radius);
  }

  .glow:active {
    color: #000;
  }

  .glow:active:after {
    background: transparent;
  }

  .glow:hover:before {
    opacity: 1;
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
