<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { onDestroy, onMount } from "svelte";

  import { removeToast, type ToastType } from "@/lib/toasts/toasts";

  import infoSVG from "@/assets/icons/info.svg";
  import successSVG from "@/assets/icons/success.svg";
  import errorSVG from "@/assets/icons/error.svg";

  type Props = {
    duration?: number;
    id: string;
    message: String;
    type: ToastType;
  };

  let { duration = 3000, id, message, type }: Props = $props();
  let show = $state(false);

  const svgs: Record<ToastType, string> = {
    info: infoSVG,
    success: successSVG,
    error: errorSVG,
  };

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
    <img width="30" height="30" src={svgs[type]} alt="I" />
    {message}
  </div>
{/if}

<style lang="scss">
  .toast {
    padding: var(--s12);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--s12);
  }
</style>
