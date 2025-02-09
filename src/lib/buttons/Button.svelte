<script lang="ts" module>
  export type ButtonProps = StyleProps & {
    children: Snippet;
    disabled?: boolean;
    onclick?: (e: MouseEvent) => void;
    type?: "button" | "submit" | "reset";
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

<button class={_class} {style} {type} {disabled} {onclick}>
  {@render children()}
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
