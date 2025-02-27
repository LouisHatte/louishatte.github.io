<script lang="ts" module>
  export type ButtonProps = StyleProps & {
    buttonRef?: HTMLButtonElement | null;
    children: Snippet;
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    type?: "button" | "submit" | "reset";
  };
</script>

<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  import Spinner from "@/lib/spinners/Spinner.svelte";

  let {
    buttonRef = $bindable(null),
    className = "",
    children,
    disabled = false,
    onclick,
    style = "",
    type = "button",
  }: ButtonProps = $props();
</script>

<button
  bind:this={buttonRef}
  class={className}
  {style}
  {type}
  {disabled}
  {onclick}
>
  {#if !disabled}
    {@render children()}
  {:else}
    <Spinner />
  {/if}
</button>

<style lang="scss">
  button {
    padding: var(--s4);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--s4);
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
</style>
