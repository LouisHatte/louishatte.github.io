<script lang="ts">
  import { _ } from "svelte-i18n";

  import Description from "@/components/body/view-2/Description.svelte";
  import Carousel, {
    type SlideItem,
  } from "@/components/body/view-2/Carousel.svelte";
  import Orbits from "@/components/body/view-2/Orbits.svelte";

  import brainImage from "@/assets/images/carousel/brain.jpg";
  import openZeppelinImage from "@/assets/images/carousel/open-zeppelin.webp";
  import spaceImage from "@/assets/images/carousel/space.webp";
  import stockMarketImage from "@/assets/images/carousel/stock-market.webp";
  import leetCodeImage from "@/assets/images/carousel/leetCode.jpeg";
  import flappyBirdImage from "@/assets/images/carousel/flappy-bird.jpg";
  import { fly } from "svelte/transition";

  const items: SlideItem[] = [
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
  ];

  let itemIndex = $state(2);
</script>

<div class="main">
  {#key itemIndex}
    <div class="top-box" in:fly={{ y: 100, duration: 1000 }}>
      <Description item={items[itemIndex]} />
      <!-- <Orbits /> -->
    </div>
  {/key}
  <div class="bottom-box">
    <Carousel bind:itemIndex {items} />
  </div>
</div>

<style lang="scss">
  .main {
    // border: solid 3px red;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: var(--s24);

    .top-box {
      display: flex;
      // height: 60%;
      // border: solid 3px green;
    }

    .bottom-box {
      margin-top: var(--s24);
    }
  }
</style>
