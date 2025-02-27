<script lang="ts">
  import { analytics, logEvent } from "@/apis/firebase";
  import LocaleSwitch from "@/components/top-bar/LocaleSwitch.svelte";
  import LikeButton from "@/components/top-bar/LikeButton.svelte";
  import MysteryButton from "@/components/top-bar/MysteryButton.svelte";
  import ButtonLink from "@/lib/buttons/ButtonLink.svelte";
  import LinkedinIcon from "@/lib/icons/LinkedinIcon.svelte";
  import GithubIcon from "@/lib/icons/GithubIcon.svelte";

  const linkedinLink = "https://www.linkedin.com/in/louis-hatte-94160111b/";
  const githubLink = "https://github.com/LouisHatte";

  function linkedinOnclick() {
    logEvent(analytics, "linkedin-button");
  }

  function githubOnClick() {
    logEvent(analytics, "github-button");
  }
</script>

<div class="main">
  <div class="buttons">
    <LocaleSwitch />
    <ButtonLink
      className="_shake"
      href={linkedinLink}
      onclick={linkedinOnclick}
    >
      <LinkedinIcon />
    </ButtonLink>
    <ButtonLink className="_shake" href={githubLink} onclick={githubOnClick}>
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
    justify-content: flex-end;
    align-items: center;
    flex-grow: 0;

    .buttons {
      display: flex;
      align-items: center;
      gap: var(--s24);
    }
  }
</style>
