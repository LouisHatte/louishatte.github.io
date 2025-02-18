<script lang="ts" module>
  export type ButtonProps = StyleProps & {
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
    _class,
    children,
    disabled,
    onclick,
    style,
    type = "button",
  }: ButtonProps = $props();

  let buttonRef: HTMLButtonElement;
  let originalWidth = $state("auto");

  onMount(() => {
    originalWidth = `${buttonRef.offsetWidth}px`;
  });
</script>

<button
  bind:this={buttonRef}
  class={_class}
  style={`min-width: ${originalWidth};` + style}
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
