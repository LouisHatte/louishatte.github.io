<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
    errors: string[] | null;
    id: string;
    label: string;
  };

  let { children, errors, id, label }: Props = $props();
</script>

<div class="form-field">
  <div class="label-field">
    <label for={id}>{label}</label>
    {#if errors}
      <div class="error">{errors[0]}</div>
    {/if}
  </div>
  {@render children()}
</div>

<style lang="scss">
  .form-field {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--s24);

    .label-field {
      display: flex;
      align-items: center;
      margin-bottom: var(--s8);
      gap: var(--s16);

      label {
        color: var(--color1);
      }

      .error {
        color: var(--color3);
        font-size: var(--s-font-size);
      }
    }
  }
</style>
