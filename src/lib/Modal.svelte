<script lang="ts">
  import type { Snippet } from "svelte";

  import closeSVG from "@/assets/icons/close.svg";

  type Props = {
    show: boolean;
    title: String;
    onClose: () => void;
    children: Snippet;
  };

  let { show, onClose, title, children }: Props = $props();
</script>

{#if show}
  <div
    class="modal-overlay"
    onclick={onClose}
    onkeyup={onClose}
    role="button"
    tabindex="0"
  >
    <div
      class="modal"
      onclick={(e) => e.stopPropagation()}
      onkeyup={(e) => e.stopPropagation()}
      role="button"
      tabindex="0"
    >
      <div class="modal-header">
        <h1>{title}</h1>
        <button onclick={onClose}>
          <img src={closeSVG} width={25} height={25} alt="C" />
        </button>
      </div>
      <div class="modal-body">
        {@render children()}
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .modal {
      width: 30%;
      min-width: 450px;
      background-color: rgba(0, 0, 0, 0.01);
      backdrop-filter: blur(10px);
      padding: var(--s16);
      border: solid 1px var(--border-color);
      border-radius: var(--border-radius);

      .modal-header {
        display: flex;
        justify-content: space-between;
      }

      .modal-body {
        padding-top: var(--s24);
      }
    }
  }
</style>
