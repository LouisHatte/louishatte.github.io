<script>
  import { _, locale } from "svelte-i18n";

  import { Locale } from "@/classes/Locale";
  import Button from "@/lib/buttons/Button.svelte";
  import ButtonLink from "@/lib/buttons/ButtonLink.svelte";
  import LinkIcon from "@/lib/icons/LinkIcon.svelte";
  import MailIcon from "@/lib/icons/MailIcon.svelte";
  import { openDialog } from "@/lib/dialogs/Dialog.svelte";

  let cvLink = $derived(`/public/CV-${Locale.get($locale)}.pdf`);
</script>

<div class="main">
  <h1>{$_("presentation-title")}</h1>
  <h2><span class="_gradient">{$_("presentation-job")}</span></h2>
  <div class="description">
    {$_("presentation-description")}
  </div>
  <div class="buttons">
    <ButtonLink href={cvLink}>
      <LinkIcon />
      {$_("presentation-cv-button")}
    </ButtonLink>
    <Button onclick={openDialog}>
      <MailIcon />
      {$_("presentation-contact-button")}
    </Button>
  </div>
</div>

<style lang="scss">
  .main {
    margin-bottom: var(--s24);
    max-width: 790px;

    h1 {
      font-size: var(--xxl-font-size);
      margin-bottom: var(--s16);
    }

    h2 {
      font-size: var(--l-font-size);
      margin-bottom: var(--s24);
    }

    .description {
      font-size: var(--m-font-size);
      margin-bottom: var(--s16);
    }

    .buttons {
      display: flex;
      gap: var(--s12);
    }
  }
</style>
