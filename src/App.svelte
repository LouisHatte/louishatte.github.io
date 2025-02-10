<script lang="ts">
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import { _ } from "svelte-i18n";

  import Button from "@/lib/buttons/Button.svelte";
  import Modal from "@/lib/modals/Modal.svelte";
  import ToastBox from "@/lib/toasts/ToastBox.svelte";

  import ContactForm from "@/components/ContactForm.svelte";
  import Stars from "@/components/canvas/Stars.svelte";

  import SendSVG from "@/assets/icons/send.svg";
  import Crosshair from "./lib/misc/Crosshair.svelte";
  import ButtonLink from "./lib/buttons/ButtonLink.svelte";
  import GlobalStyle from "./lib/GlobalStyle.svelte";
  import ButtonBar from "./components/ButtonBar.svelte";
  import Spinner from "./components/top-bar/MysteryButton.svelte";
  import ChatBot from "./components/ChatBot.svelte";
  import Displacement from "./components/canvas/Displacement.svelte";
  import Bitcoin from "./components/canvas/Bitcoin.svelte";
  import Carousel, { type SlideItem } from "./components/Carousel.svelte";

  import "@/global.scss";

  import ethereumImage from "@/assets/images/ethereum.png";
  import flappyBirdImage from "@/assets/images/flappy-bird.jpg";
  import leetCodeImage from "@/assets/images/leet-code.jpg";
  import neuralNetworkImage from "@/assets/images/neural-network.jpg";
  import spaceImage from "@/assets/images/space.jpg";
  import stockMarketImage from "@/assets/images/stock-market.jpg";
  import TopBar from "./components/top-bar/TopBar.svelte";
  import Card from "./lib/cards/Card.svelte";
  import Test from "./components/Test.svelte";

  let showContactModal = $state(false);

  function openContactModal() {
    showContactModal = true;
  }

  const items: SlideItem[] = [
    {
      category: "Project",
      title: "AI",
      image: neuralNetworkImage,
      description: "...",
      year: "2022",
      githubLink: "",
    },
    {
      category: "Challenge",
      title: "Ethernaut",
      image: ethereumImage,
      description: "...",
      year: "2023",
      githubLink: "",
    },
    {
      category: "Project",
      title: "Portfolio",
      image: spaceImage,
      description: "...",
      year: "2025",
      githubLink: "",
    },
    {
      category: "Project",
      title: "Stock market AI",
      image: stockMarketImage,
      description: "...",
      year: "2025",
      githubLink: "",
    },
    {
      category: "Challenge",
      title: "Leetcode",
      image: leetCodeImage,
      description: "...",
      year: "2025",
      githubLink: "",
    },
    {
      category: "Project",
      title: "Flappy Bird",
      image: flappyBirdImage,
      description: "...",
      year: "2020",
      githubLink: "https://github.com/LouisHatte/Game-flappyBird",
    },
  ];
</script>

<Stars />
<Crosshair />
<main>
  {#if !showContactModal}
    <div class="content" out:fade={{ duration: 500, easing: cubicInOut }}>
      <TopBar />
      <!-- <Test /> -->
      <!-- <Card
        >Louis Hatté
        <div>Hello world</div></Card
      > -->
      <!-- <Bitcoin /> -->
      <!-- <ChatBot />
      <ChatBot /> -->
      <!-- <Carousel {items} /> -->
      <!-- <div style="margin-bottom: 24px;"></div>
      <ButtonBar {openContactModal} /> -->
    </div>
  {/if}

  <ToastBox />
  <Modal bind:show={showContactModal} title={$_("contact")}>
    <ContactForm />
  </Modal>
  <GlobalStyle />
</main>

<style>
  main {
    position: relative;
    max-width: 1434px;
    /* max-height: 606; */
    /* overflow: hidden; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: var(--s24);
    border: green solid 3px;
  }

  .content {
    width: 100%;
    height: 100%;
  }
</style>
