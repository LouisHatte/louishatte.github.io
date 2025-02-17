<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { onDestroy, onMount } from "svelte";

  import { removeToast, type ToastType } from "@/lib/toasts/toasts";

  import InfoIcon from "@/lib/icons/InfoIcon.svelte";
  import SuccessIcon from "@/lib/icons/SuccessIcon.svelte";
  import ErrorIcon from "@/lib/icons/ErrorIcon.svelte";

  type Props = {
    duration?: number;
    id: string;
    message: String;
    type: ToastType;
  };

  let { duration = 3000, id, message, type }: Props = $props();
  let show = $state(false);

  const svgs = {
    info: InfoIcon,
    success: SuccessIcon,
    error: ErrorIcon,
  };
  const Icon = svgs[type];

  const timeout = setTimeout(() => (show = false), duration);

  onMount(() => {
    show = true;
  });

  onDestroy(() => {
    clearTimeout(timeout);
  });
</script>

{#if show}
  <div
    class="toast"
    transition:fly={{ y: -50, duration: 500, easing: cubicOut }}
    onoutroend={() => removeToast(id)}
  >
    <Icon />
    {message}
  </div>
{/if}

<style lang="scss">
  .toast {
    padding: var(--s12);
    border: 1px solid var(--color5);
    border-radius: var(--border-radius);
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--s12);
  }
</style>
