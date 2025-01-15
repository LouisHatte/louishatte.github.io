<script lang="ts">
  type Props = StyleProps & {
    rows?: number;
    id: string;
    value: string;
  };
  let { classes, id, rows = 3, style, value = $bindable() }: Props = $props();
</script>

<div class="border-glow">
  <textarea class={classes} {style} {rows} name={id} bind:value></textarea>
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
