<script lang="ts">
  import Toast from "@/lib/toasts/Toast.svelte";
  import { toasts } from "@/stores/toasts";
</script>

<div class="toast-box">
  {#each $toasts as { id, message, type, duration } (id)}
    <Toast key={id} {message} {type} {duration} />
  {/each}
</div>

<style>
  .toast-box {
    position: fixed;
    top: var(--s16);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: var(--s16);
    z-index: var(--z-second);
  }
</style>
