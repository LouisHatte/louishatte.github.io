<script lang="ts">
  import { _, locale } from "svelte-i18n";

  import Button from "@/lib/buttons/Button.svelte";
  import ButtonLink from "@/lib/buttons/ButtonLink.svelte";
  import ButtonDownload from "@/lib/buttons/ButtonDownload.svelte";
  import GithubIcon from "@/lib/icons/GithubIcon.svelte";
  import LinkedinIcon from "@/lib/icons/LinkedinIcon.svelte";
  import MailIcon from "@/components/icons/MailIcon.svelte";
  import DownloadIcon from "@/lib/icons/DownloadIcon.svelte";

  let CVFilePath = $derived($locale === "en" ? "/wall.jpg" : "/wall-bump.jpg");
  let CVFileName = $derived($locale === "en" ? "wall.jpg" : "wall-bump.jpg");

  type Props = {
    openContactModal: () => void;
  };

  let { openContactModal }: Props = $props();
</script>

<div>
  <ButtonLink href="https://www.linkedin.com/in/louis-hatte-94160111b/">
    <LinkedinIcon />
  </ButtonLink>
  <ButtonLink href="https://github.com/LouisHatte">
    <GithubIcon />
  </ButtonLink>
  <Button onclick={openContactModal}>
    <MailIcon />
    {$_("contact")}
  </Button>
  <ButtonDownload href={CVFilePath} download={CVFileName}>
    <DownloadIcon />
    {$_("cvFileName")}
  </ButtonDownload>
</div>

<style>
  div {
    width: 600px;
    display: flex;
    justify-content: space-around;
  }
</style>
