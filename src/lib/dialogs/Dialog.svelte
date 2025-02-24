<script lang="ts" module>
  let dialogRef: HTMLDialogElement;

  export const isDialogOpen = writable(false);

  export function openDialog() {
    dialogRef.showModal();
    isDialogOpen.set(true);
  }

  export function closeDialog() {
    dialogRef.close();
    isDialogOpen.set(false);
  }
</script>

<script lang="ts">
  import { type Snippet } from "svelte";
  import { fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  import Button from "@/lib/buttons/Button.svelte";
  import CloseIcon from "@/lib/icons/CloseIcon.svelte";
  import { writable } from "svelte/store";

  type Props = {
    children: Snippet;
    title: string;
  };

  let { children, title }: Props = $props();

  const fadeOptions = { duration: 250, easing: cubicOut, delay: 250 };
  const flyOptions = { y: 500, duration: 500, easing: cubicOut };
</script>

<dialog bind:this={dialogRef}>
  <div
    class="modal"
    in:fade={fadeOptions}
    onkeydown={(event) => {
      if (event.key === "Escape") closeDialog();
    }}
    tabindex="0"
    role="button"
  >
    <div class="modal-header">
      <h1>{title}</h1>
      <Button onclick={closeDialog}>
        <CloseIcon />
      </Button>
    </div>
    <div class="modal-body">
      {@render children()}
    </div>
  </div>
</dialog>

<style lang="scss">
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    min-width: 450px;
    background-color: rgba(0, 0, 0, 0.01);
    padding: var(--s16);
    border: solid 1px var(--color5);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;

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
</style>
