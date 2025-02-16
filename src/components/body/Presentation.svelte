<script>
  import { _, locale } from "svelte-i18n";

  import Button from "@/lib/buttons/Button.svelte";
  import ButtonLink from "@/lib/buttons/ButtonLink.svelte";
  import LinkIcon from "@/lib/icons/LinkIcon.svelte";
  import MailIcon from "@/lib/icons/MailIcon.svelte";
  import Modal from "@/lib/modals/Modal.svelte";
  import ContactForm from "@/components/body/ContactForm.svelte";
  import { Locale } from "@/classes/Locale";
  import { openModal } from "@/stores/modals";

  let cvLink = $derived(`/public/CV-${Locale.get($locale)}.pdf`);
</script>

<div class="main">
  <h1>Hey, I'm Louis.</h1>
  <h2>From Full Stack to Smart Contract developer</h2>
  <div class="description">
    I'm a full-stack developer transitioning into smart contract development,
    with a passion for blockchain technology and AI. I'm currently deepening my
    expertise in Solidity and decentralized systems.
  </div>
  <div class="buttons">
    <ButtonLink href={cvLink}>
      <LinkIcon />
      View Full Resume
    </ButtonLink>
    <Button onclick={() => openModal("contact")}>
      <MailIcon />
      {$_("contact")}
    </Button>
  </div>
</div>

<style lang="scss">
  .main {
    margin-bottom: var(--s24);

    h1 {
      font-size: 32px;
      margin-bottom: var(--s16);
    }

    h2 {
      font-size: 22px;
      margin-bottom: var(--s24);
    }

    .description {
      margin-bottom: var(--s16);
    }

    .buttons {
      display: flex;
      gap: var(--s12);
    }
  }
</style>
