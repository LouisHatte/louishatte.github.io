<script lang="ts">
  import { onMount } from "svelte";
  import type { HTMLInputTypeAttribute } from "svelte/elements";

  type Props = StyleProps & {
    autoFocus?: boolean;
    id: string;
    onkeydown?: (event: KeyboardEvent) => void;
    placeholder?: string;
    type: HTMLInputTypeAttribute;
    value: string;
  };

  let {
    autoFocus = false,
    _class,
    id,
    onkeydown,
    placeholder,
    style,
    type = "text",
    value = $bindable(),
  }: Props = $props();

  let ref: HTMLInputElement | null = null;

  onMount(() => {
    if (ref && autoFocus) {
      ref.focus();
    }
  });
</script>

<input
  class={_class}
  {style}
  {type}
  name={id}
  {placeholder}
  {onkeydown}
  bind:this={ref}
  bind:value
/>

<style lang="scss">
  input {
    width: 100%;
    padding: var(--s8);
    background: transparent;
    border: solid 1px var(--color5);
    border-radius: var(--border-radius);

    &::placeholder {
      color: var(--color5);
    }

    &:hover,
    &:focus {
      border: solid 1px var(--color1);
      box-shadow: var(--box-shadow);
      transition:
        border 0.3s ease-in-out,
        box-shadow 0.3s ease-in-out;
      animation: shadowPulse 2s infinite alternate ease-in-out;
    }

    @keyframes shadowPulse {
      0% {
        box-shadow: 0px 0px 7px 2px var(--color0);
      }
      100% {
        box-shadow: 0px 0px 7px 2px var(--color1);
      }
    }
  }
</style>
