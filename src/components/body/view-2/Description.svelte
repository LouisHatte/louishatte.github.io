<script lang="ts">
  import { type SlideItem } from "@/components/body/view-2/Carousel.svelte";
  import ButtonLink from "@/lib/buttons/ButtonLink.svelte";
  import GithubIcon from "@/lib/icons/GithubIcon.svelte";

  import Orbit from "@/components/body/view-2/Orbit.svelte";
  import SendIcon from "@/lib/icons/SendIcon.svelte";
  import LinkedinIcon from "@/lib/icons/LinkedinIcon.svelte";
  import Orbits from "./Orbits.svelte";

  type Props = {
    item: SlideItem;
  };

  let { item }: Props = $props();
</script>

<div class="description">
  <div>
    <h1>{item.category} - {item.year}</h1>
    <h2><span class="_gradient">{item.title}</span></h2>
    <div class="text">{item.description}</div>
    {#if item.githubLink}
      <ButtonLink href={item.githubLink}>
        <GithubIcon />
        View Project
      </ButtonLink>
    {/if}
  </div>
</div>

<style lang="scss">
  .description {
    position: relative;
    width: 60%;
    display: flex;
    // flex-direction: column;
    // border: solid 3px purple;

    h1 {
      font-size: var(--l-font-size);
      margin-bottom: var(--s8);
    }

    h2 {
      font-size: var(--xxl-font-size);
      margin-bottom: var(--s12);
    }

    .text {
      margin-bottom: var(--s12);
    }
  }
</style>
