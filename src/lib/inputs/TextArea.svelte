<script lang="ts">
  type Props = StyleProps & {
    id: string;
    placeholder?: string;
    rows?: number;
    value: string;
  };

  let {
    className = "",
    id,
    placeholder = "",
    rows = 3,
    style = "",
    value = $bindable(),
  }: Props = $props();
</script>

<textarea
  class={"_pulse" + className}
  {style}
  {rows}
  name={id}
  {placeholder}
  bind:value
>
</textarea>

<style lang="scss">
  textarea {
    width: 100%;
    padding: var(--s8);
    background: transparent;
    border: solid 1px var(--color3);
    border-radius: var(--border-radius);
    resize: none;

    &::placeholder {
      color: var(--color3);
    }
  }
</style>
