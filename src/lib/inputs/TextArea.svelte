<script lang="ts">
  type Props = StyleProps & {
    id?: string;
    placeholder?: string;
    rows?: number;
    value: string;
  };
  let {
    _class,
    id,
    placeholder,
    rows = 3,
    style,
    value = $bindable(),
  }: Props = $props();
</script>

<textarea class={_class} {style} {rows} name={id} {placeholder} bind:value>
</textarea>

<style lang="scss">
  textarea {
    width: 100%;
    padding: var(--s8);
    background: transparent;
    border: solid 1px var(--color3);
    border-radius: var(--border-radius);
    resize: "none";

    &::placeholder {
      color: var(--color3);
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
