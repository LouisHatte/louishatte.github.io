<script lang="ts">
  import type { Snippet } from "svelte";
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  import closeSVG from "@/assets/icons/close.svg";

  type Props = {
    children: Snippet;
    closeModal: () => void;
    show: boolean;
    title: String;
  };

  let { children, closeModal, show, title }: Props = $props();
</script>

{#if show}
  {console.log("B!")}
  <div class="modal-overlay">
    <div class="modal" in:fade={{ duration: 1000, easing: cubicInOut }}>
      <div class="modal-header">
        <h1>{title}</h1>
        <button onclick={closeModal}>
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
    z-index: var(--z-third);

    .modal {
      width: 30%;
      min-width: 450px;
      background-color: rgba(0, 0, 0, 0.01);
      backdrop-filter: blur(1px);
      padding: var(--s16);
      border: solid 1px var(--border-color);
      border-radius: var(--border-radius);

      .modal-header {
        display: flex;
        justify-content: space-between;

        h1 {
          font-size: 30px;
        }
      }

      .modal-body {
        margin-top: var(--s32);
      }
    }
  }
</style>
