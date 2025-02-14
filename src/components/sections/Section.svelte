<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  let { children }: Props = $props();
</script>

<div class="section">
  {@render children()}
</div>

<style lang="scss">
  .section {
    padding: var(--s24);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    background-color: var(--color9);
  }
</style>
