<script>
  import { _ } from "svelte-i18n";

  import Button from "@/lib/buttons/Button.svelte";
  import ButtonLink from "@/lib/buttons/ButtonLink.svelte";
  import LinkIcon from "@/lib/icons/LinkIcon.svelte";
  import MailIcon from "@/lib/icons/MailIcon.svelte";
  import { showModal } from "@/stores/modals";
  import Modal from "@/lib/modals/Modal.svelte";
  import ContactForm from "@/components/sections/introduction/ContactForm.svelte";

  function openContactModal() {
    $showModal = true;
  }
</script>

<div class="section">
  <div class="top-section">
    <h1>Hey, I'm Louis.</h1>
  </div>
  <h2>From Full Stack to Smart Contract developer</h2>
  <div class="description">
    I'm a full-stack developer transitioning into smart contract development,
    with a passion for blockchain technology and AI. I'm currently deepening my
    expertise in Solidity and decentralized systems.
  </div>
  <div class="a">
    <ButtonLink href="/public/CV-fr.pdf"
      ><LinkIcon />View Full Resume</ButtonLink
    >
    <Button onclick={openContactModal}>
      <MailIcon />
      {$_("contact")}
    </Button>
  </div>
</div>
<Modal bind:show={$showModal} title={$_("contact")}>
  <ContactForm />
</Modal>

<style lang="scss">
  .a {
    display: flex;
    gap: var(--s12);
  }
  .section {
    width: 50%;
    .top-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .description {
      margin-bottom: var(--s16);
    }
  }
  h1 {
    font-size: 32px;
    margin-bottom: var(--s16);
  }
  h2 {
    font-size: 22px;
    margin-bottom: var(--s24);
  }
  .section {
    border: solid 3px red;
  }
</style>
