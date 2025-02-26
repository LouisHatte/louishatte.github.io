<script lang="ts">
  import { fly } from "svelte/transition";

  import { _ } from "@/classes/Locale";
  import Description from "@/components/body/view-2/Description.svelte";
  import Carousel, {
    type SlideItem,
  } from "@/components/body/view-2/Carousel.svelte";

  import brainImage from "@/assets/images/brain.jpg";
  import openZeppelinImage from "@/assets/images/open-zeppelin.webp";
  import spaceImage from "@/assets/images/space.webp";
  import stockMarketImage from "@/assets/images/stock-market.webp";
  import leetCodeImage from "@/assets/images/leetCode.jpeg";
  import flappyBirdImage from "@/assets/images/flappy-bird.jpg";

  let items: SlideItem[] = $derived([
    {
      category: $_("project-challenge-category"),
      title: $_("project-ai-harvard-title"),
      image: brainImage,
      description: $_("project-ai-harvard-description"),
      year: "2022",
    },
    {
      category: $_("project-challenge-category"),
      title: $_("project-ethernaut-title"),
      image: openZeppelinImage,
      description: $_("project-ethernaut-description"),
      year: "2023",
    },
    {
      category: $_("project-project-category"),
      title: $_("project-portfolio-title"),
      image: spaceImage,
      description: $_("project-portfolio-description"),
      year: "2025",
    },
    {
      category: $_("project-project-category"),
      title: $_("project-stock-market-title"),
      image: stockMarketImage,
      description: $_("project-stock-market-description"),
      year: "2025",
    },
    {
      category: $_("project-challenge-category"),
      title: $_("project-leet-code-title"),
      image: leetCodeImage,
      description: $_("project-leet-code-description"),
      year: "2025",
    },
    {
      category: $_("project-side-project-category"),
      title: $_("project-flappy-bird-title"),
      image: flappyBirdImage,
      description: $_("project-flappy-bird-description"),
      year: "2020",
      githubLink: "https://github.com/LouisHatte/Game-flappyBird",
    },
  ]);

  let itemIndex = $state(2);
</script>

<div class="main">
  {#key itemIndex}
    <div class="top-box" in:fly={{ y: 100, duration: 1000 }}>
      <Description item={items[itemIndex]} />
    </div>
  {/key}
  <div class="bottom-box">
    <Carousel bind:itemIndex {items} />
  </div>
</div>

<style lang="scss">
  .main {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: var(--s64);

    .top-box {
      display: flex;
      padding-left: var(--s64);
      height: 50%;
    }

    .bottom-box {
      height: 50%;
      margin-top: var(--s24);
    }
  }
</style>
