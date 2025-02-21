<script lang="ts">
  // import ethereumImage from "@/assets/images/ethereum.png";
  // import flappyBirdImage from "@/assets/images/flappy-bird.jpg";
  // import leetCodeImage from "@/assets/images/leet-code.jpg";
  // import neuralNetworkImage from "@/assets/images/neural-network.jpg";
  // import spaceImage from "@/assets/images/space.jpg";
  // import stockMarketImage from "@/assets/images/stock-market.jpg";

  import Carousel, {
    type SlideItem,
  } from "@/components/body/view-2/Carousel.svelte";

  const items: SlideItem[] = [
    {
      category: "Project",
      title: "AI",
      image: "", // neuralNetworkImage,
      description: "...",
      year: "2022",
      githubLink: "",
    },
    {
      category: "Challenge",
      title: "Ethernaut",
      image: "", // ethereumImage,
      description: "...",
      year: "2023",
      githubLink: "",
    },
    {
      category: "Project",
      title: "Portfolio",
      image: "", // spaceImage,
      description: "...",
      year: "2025",
      githubLink: "",
    },
    {
      category: "Project",
      title: "Stock market AI",
      image: "", // stockMarketImage,
      description: "...",
      year: "2025",
      githubLink: "",
    },
    {
      category: "Challenge",
      title: "Leetcode",
      image: "", // leetCodeImage,
      description: "...",
      year: "2025",
      githubLink: "",
    },
    {
      category: "Project",
      title: "Flappy Bird",
      image: "", // flappyBirdImage,
      description: "...",
      year: "2020",
      githubLink: "https://github.com/LouisHatte/Game-flappyBird",
    },
  ];
</script>

<div class="main">
  <Carousel {items} />
</div>

<style lang="scss">
  .main {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
