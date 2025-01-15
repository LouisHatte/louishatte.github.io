<script lang="ts">
  import type { Snippet } from "svelte";
  import { fly } from "svelte/transition";
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import { cubicOut } from "svelte/easing";

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
  <div class="modal-overlay">
    <div
      class="modal"
      transition:fly={{ y: 500, duration: 500, easing: cubicOut }}
    >
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
    align-items: flex-end;
    z-index: var(--z-third);

    .modal {
      width: 100%;
      height: 60%;
      max-width: 450px;
      background-color: rgba(0, 0, 0, 0.01);
      backdrop-filter: blur(1px);
      padding: var(--s16);
      border: solid 1px var(--border-color);
      border-bottom: none;
      border-top-left-radius: var(--border-radius-mobile);
      border-top-right-radius: var(--border-radius-mobile);
      overflow: scroll;

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

  // @keyframes slide-up {
  //   from {
  //     transform: translateY(100%);
  //   }
  //   to {
  //     transform: translateY(0);
  //   }
  // }
</style>
