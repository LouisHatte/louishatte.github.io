<script lang="ts">
  import { _ } from "@/classes/Locale";
  import { type SlideItem } from "@/components/body/view-2/Carousel.svelte";
  import ButtonLink from "@/lib/buttons/ButtonLink.svelte";
  import GithubIcon from "@/lib/icons/GithubIcon.svelte";

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
        {$_("project-view-project")}
      </ButtonLink>
    {/if}
  </div>
</div>

<style lang="scss">
  .description {
    position: relative;
    width: 60%;
    display: flex;

    h1 {
      font-size: var(--l-font-size);
      margin-bottom: var(--s8);
    }

    h2 {
      padding-bottom: var(--s48);

      span {
        font-size: var(--l-font-size);
      }
    }

    .text {
      margin-bottom: var(--s12);
      color: var(--color2);
    }
  }
</style>
