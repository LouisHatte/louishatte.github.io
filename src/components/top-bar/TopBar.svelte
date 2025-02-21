<script lang="ts">
  import LocaleSwitch from "@/components/top-bar/LocaleSwitch.svelte";
  import LikeButton from "@/components/top-bar/LikeButton.svelte";
  import MysteryButton from "@/components/top-bar/MysteryButton.svelte";
  import EthIcon from "@/lib/icons/EthIcon.svelte";
  import ButtonLink from "@/lib/buttons/ButtonLink.svelte";
  import LinkedinIcon from "@/lib/icons/LinkedinIcon.svelte";
  import GithubIcon from "@/lib/icons/GithubIcon.svelte";

  const linkedinLink = "https://www.linkedin.com/in/louis-hatte-94160111b/";
  const githubLink = "https://github.com/LouisHatte";
</script>

<div class="main">
  <EthIcon width={32} height={32} />
  <div class="buttons">
    <LocaleSwitch />
    <ButtonLink _class="_shake" href={linkedinLink}>
      <LinkedinIcon />
    </ButtonLink>
    <ButtonLink _class="_shake" href={githubLink}>
      <GithubIcon />
    </ButtonLink>
    <LikeButton />
    <MysteryButton />
  </div>
</div>

<style lang="scss">
  .main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 0;

    .buttons {
      display: flex;
      align-items: center;
      gap: var(--s24);
    }
  }
</style>
