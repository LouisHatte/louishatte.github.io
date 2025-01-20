<script lang="ts">
  import { onMount } from "svelte";
  import type { HTMLInputTypeAttribute } from "svelte/elements";

  type Props = StyleProps & {
    autoFocus?: boolean;
    id: string;
    placeholder?: string;
    type: HTMLInputTypeAttribute;
    value: string;
  };

  let {
    autoFocus = false,
    _class,
    id,
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

<div class="border-glow">
  <input
    class={_class}
    {style}
    {type}
    name={id}
    {placeholder}
    bind:this={ref}
    bind:value
  />
</div>

<style lang="scss">
  input {
    padding: var(--s8);
    background: transparent;
    border: none;
  }

  :global(.border-glow) {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
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
      border: 1px solid transparent;
      border-radius: var(--border-radius);
      filter: blur(5px);
      opacity: 0;
      animation: glowing 20s linear infinite;
      transition: opacity 0.2s ease-in-out;

      mask:
        linear-gradient(#000 0 0) padding-box,
        linear-gradient(#000 0 0);
      -webkit-mask:
        linear-gradient(#000 0 0) padding-box,
        linear-gradient(#000 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }

    &:focus-within {
      border: 1px solid var(--black);
      transition: border 1s ease-in-out;
    }

    &:focus-within:before {
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
