<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    show?: boolean;
    title: String;
    onClose?: () => void;
    children: Snippet;
  };

  let { show = false, onClose = hide, title, children }: Props = $props();

  function hide() {
    show = false;
  }
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
      class="modal-content"
      onclick={(e) => e.stopPropagation()}
      onkeyup={onClose}
      role="button"
      tabindex="0"
    >
      <button
        class="close-btn"
        onclick={onClose}
        aria-label="Close modal"
        type="button">X</button
      >
      <h2 id="modal-title">{title}</h2>
      {@render children()}
    </div>
  </div>
{/if}

<style>
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
    z-index: 1000;
    cursor: pointer; /* Ensures pointer cursor for the overlay */
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-width: 300px;
    position: relative;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
</style>
