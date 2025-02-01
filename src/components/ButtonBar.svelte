<script lang="ts">
  import { _, locale } from "svelte-i18n";

  import Button from "@/lib/buttons/Button.svelte";
  import ButtonLink from "@/lib/buttons/ButtonLink.svelte";
  import Spinner from "@/lib/spinners/Spinner.svelte";

  import { Locale } from "@/classes/Locale";

  import githubSVG from "@/assets/icons/github.svg";
  import linkedinSVG from "@/assets/icons/linkedin.svg";
  import sendSVG from "@/assets/icons/send.svg";
  import downloadSVG from "@/assets/icons/download.svg";
  import ButtonDownload from "@/lib/buttons/ButtonDownload.svelte";
  import ButtonLike from "./ButtonLike.svelte";

  let CVFilePath = $derived($locale === "en" ? "/wall.jpg" : "/wall-bump.jpg");
  let CVFileName = $derived($locale === "en" ? "wall.jpg" : "wall-bump.jpg");

  type Props = {
    openContactModal: () => void;
  };

  let { openContactModal }: Props = $props();
</script>

<div>
  <Button onclick={Locale.switch}>{$_("lang")}</Button>
  <ButtonLink href="https://www.linkedin.com/in/louis-hatte-94160111b/">
    <img src={linkedinSVG} width={30} height={30} alt="L" />
  </ButtonLink>
  <ButtonLink href="https://github.com/LouisHatte">
    <img src={githubSVG} width={30} height={30} alt="G" />
  </ButtonLink>
  <Button onclick={openContactModal}>
    <img src={sendSVG} width={30} height={30} alt="S" />
    {$_("contact")}
  </Button>
  <ButtonDownload href={CVFilePath} download={CVFileName}>
    <img src={downloadSVG} width={30} height={30} alt="D" />
    {$_("cvFileName")}
  </ButtonDownload>
  <ButtonLike />
  <Spinner />
</div>

<style>
  div {
    width: 600px;
    display: flex;
    justify-content: space-around;
  }
</style>
