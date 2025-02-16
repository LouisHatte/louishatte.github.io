<script lang="ts">
  import ButtonLink from "@/lib/buttons/ButtonLink.svelte";
  import { type SlideItem } from "./Carousel.svelte";
  import githubSVG from "@/assets/icons/github.svg";

  type Props = {
    item: SlideItem;
  };

  let { item }: Props = $props();
</script>

<div class="main">
  <div class="header">
    <h1>{item.title} - {item.category}</h1>
    {#if item.githubLink}
      <ButtonLink href={item.githubLink}>
        <img src={githubSVG} alt="G" />
      </ButtonLink>
    {/if}
  </div>
  <div class="body">
    <div class="right">
      <div>{item.description}</div>
    </div>
  </div>
  <div class="footer">{item.year}</div>
</div>

<style lang="scss">
  .main {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-image: url(--image);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: var(--border-radius);
    // border: solid 3px red;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--s24);
      // border: solid 1px blue;
    }

    .body {
      display: flex;
      flex-grow: 1;
      overflow: hidden;
      // border: solid 1px green;

      // .left {
      //   width: 50%;
      //   height: 100%;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      //   // border: solid 2px purple;

      //   img {
      //     width: 100%;
      //     height: 100%;
      //     max-width: 100%;
      //     max-height: 100%;
      //     object-fit: fill;
      //     // border: solid 2px cyan;
      //   }
      // }

      .right {
        width: 50%;
      }
    }

    .footer {
      // border: solid 1px orange;
      display: flex;
      justify-content: end;
    }
  }
</style>
