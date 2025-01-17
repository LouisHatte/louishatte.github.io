<script lang="ts">
  import { _ } from "svelte-i18n";

  import Button from "@/lib/buttons/Button.svelte";
  import ButtonLink from "@/lib/buttons/ButtonLink.svelte";
  import ButtonLanguage from "@/components/ButtonLanguage.svelte";
  import Spinner from "@/lib/spinners/Spinner.svelte";

  import githubSVG from "@/assets/icons/github.svg";
  import linkedinSVG from "@/assets/icons/linkedin.svg";
  import sendSVG from "@/assets/icons/send.svg";

  type Props = {
    openContactModal: () => void;
  };

  let { openContactModal }: Props = $props();
</script>

<div>
  <ButtonLanguage />
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
  <Spinner />
</div>

<style>
  div {
    width: 360px;
    display: flex;
    justify-content: space-around;
  }
</style>
