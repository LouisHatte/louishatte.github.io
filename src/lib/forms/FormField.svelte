<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    errors: string[] | null;
    key: string;
    label: string;
    children: Snippet;
  };

  let { errors, key, label, children }: Props = $props();
</script>

<div class="form-field">
  <div class="label-field">
    <label for={key}>{label}</label>
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
    margin-bottom: var(--s16);

    .label-field {
      display: flex;
      align-items: center;
      margin-bottom: var(--s8);
      gap: var(--s16);

      label {
        color: var(--sub-text-color);
      }

      .error {
        color: var(--error-color);
        font-size: var(--xs-font-size);
      }
    }
  }
</style>
