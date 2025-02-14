<script>
  import { _ } from "svelte-i18n";

  import { showModal } from "@/stores/modals";
  import ButtonBar from "./ButtonBar.svelte";
  import Modal from "@/lib/modals/Modal.svelte";
  import ContactForm from "./ContactForm.svelte";
  import Section from "../Section.svelte";

  function openContactModal() {
    $showModal = true;
  }
</script>

<Section>
  <ButtonBar {openContactModal} />
  <Modal bind:show={$showModal} title={$_("contact")}>
    <ContactForm />
  </Modal>
</Section>
