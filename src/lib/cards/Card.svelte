<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  let { children }: Props = $props();
</script>

<div class="card">
  {@render children()}
</div>

<style lang="scss">
  .card {
    padding: var(--s24);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    box-shadow: var(--white-box-shadow);
    background-color: var(--black);
  }
</style>
