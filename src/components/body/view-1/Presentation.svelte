<script lang="ts">
  import { analytics, logEvent } from "@/apis/firebase";
  import { _, Locale, locale } from "@/classes/Locale";
  import { BASE_URL } from "@/constants";
  import Button from "@/lib/buttons/Button.svelte";
  import ButtonLink from "@/lib/buttons/ButtonLink.svelte";
  import ExternalLinkIcon from "@/lib/icons/ExternalLinkIcon.svelte";
  import MailIcon from "@/lib/icons/MailIcon.svelte";
  import { openDialog } from "@/lib/dialogs/Dialog.svelte";
  import { theme } from "@/lib/styles/colors";

  let cvLink = $derived(`${BASE_URL}CV-${Locale.get($locale)}.pdf`);

  function cvOnclick() {
    logEvent(analytics, "cv-button");
  }

  function contactOnclick() {
    logEvent(analytics, "contact-button");
    openDialog();
  }
</script>

<div class="main">
  <h1>{$_("presentation-title")}</h1>
  <h2>
    <span class="_gradient job" style="--gradient: {$theme['color5']}"
      >{$_("presentation-job")}
    </span>
  </h2>
  <div class="description">
    {$_("presentation-description")}
  </div>
  <div class="buttons">
    <ButtonLink href={cvLink} onclick={cvOnclick}>
      <ExternalLinkIcon />
      {$_("presentation-cv-button")}
    </ButtonLink>
    <Button onclick={contactOnclick}>
      <MailIcon />
      {$_("presentation-contact-button")}
    </Button>
  </div>
</div>

<style lang="scss">
  .main {
    width: 420px;

    h1 {
      font-size: var(--xxl-font-size);
      margin-bottom: var(--s32);
    }

    h2 {
      padding-bottom: var(--s48);

      span {
        font-size: var(--l-font-size);
      }
    }

    .description {
      margin-bottom: var(--s32);
      color: var(--color2);
    }

    .buttons {
      display: flex;
      gap: var(--s12);
    }
  }
</style>
