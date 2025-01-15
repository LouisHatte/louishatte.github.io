<script lang="ts">
  import { isMobile } from "@/stores/screenSize";
  import { modalState, closeModal } from "@/stores/modal";
  import Modal from "@/lib/modals/Modal.svelte";
  import ModalMobile from "@/lib/modals/ModalMobile.svelte";

  const { title, content, show } = $modalState;
</script>

{#if $isMobile}
  <ModalMobile {show} {closeModal} {title}>
    {#if content}
      <content></content>
    {/if}
  </ModalMobile>
{:else}
  {console.log("A!")}
  <Modal {show} {closeModal} {title}>
    {#if content}
      {console.log("C!")}
      <content></content>
    {/if}
  </Modal>
{/if}
