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

<div class="border-glow">
  <textarea class={_class} {style} {rows} name={id} {placeholder} bind:value>
  </textarea>
</div>

<style lang="scss">
  textarea {
    width: 100%;
    padding: var(--s8);
    background: transparent;
    border: none;
    resize: none;
  }
</style>
