<script lang="ts">
  type Props = {
    rows?: number;
    id: string;
    value: string;
  };
  let { rows = 3, id, value = $bindable() }: Props = $props();
</script>

<div class="border-glow">
  <textarea {rows} name={id} bind:value></textarea>
</div>

<style lang="scss">
  textarea {
    resize: none;
  }
</style>
