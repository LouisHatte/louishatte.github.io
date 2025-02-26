<script lang="ts">
  import { onMount } from "svelte";
  import type { HTMLInputTypeAttribute } from "svelte/elements";

  type Props = StyleProps & {
    autoFocus?: boolean;
    disabled?: boolean;
    id: string;
    onkeydown?: (event: KeyboardEvent) => void;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    value: string;
  };

  let {
    autoFocus = false,
    className = "",
    disabled = false,
    id,
    onkeydown,
    placeholder = "",
    style = "",
    type = "text",
    value = $bindable(),
  }: Props = $props();

  let inputRef: HTMLInputElement;

  onMount(() => {
    if (autoFocus) {
      inputRef.focus();
    }
  });
</script>

<input
  class={"_pulse" + className}
  {style}
  {type}
  name={id}
  {placeholder}
  {disabled}
  {onkeydown}
  bind:this={inputRef}
  bind:value
/>

<style lang="scss">
  input {
    width: 100%;
    padding: var(--s8);
    background: transparent;
    border: solid 1px var(--color3);
    border-radius: var(--border-radius);

    &::placeholder {
      color: var(--color3);
    }
  }
</style>
