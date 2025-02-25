<script lang="ts" module>
  export type SlideItem = {
    category: string;
    title: string;
    image: string;
    description: string;
    year: string;
    githubLink?: string;
  };
</script>

<script lang="ts">
  import { analytics } from "@/apis/firebase";

  import Button from "@/lib/buttons/Button.svelte";

  import ChevronLeftIcon from "@/lib/icons/ChevronLeftIcon.svelte";
  import ChevronRightIcon from "@/lib/icons/ChevronRightIcon.svelte";
  import { logEvent } from "firebase/analytics";

  type Props = {
    items: SlideItem[];
    itemIndex: number;
  };

  let { items, itemIndex = $bindable() }: Props = $props();

  const slideIndexes = [0, 1, 2, 3, 4];
  const n = slideIndexes.length;
  const m = items.length;

  let visibleItemIndexes = $state(slideIndexes);
  let slideIndex = $state(2);

  let previousSlideIndex = 2;

  $effect(() => {
    if (slideIndex === previousSlideIndex) return;

    const diff = slideIndex - previousSlideIndex;
    const cyclicDiff = diff > 0 ? (diff + n) % n : (diff - n) % n;

    const shift =
      cyclicDiff > 2 || cyclicDiff < -2
        ? cyclicDiff + Math.sign(cyclicDiff) * n * -1
        : cyclicDiff;

    itemIndex = (itemIndex + m + shift) % m;
    logEvent(analytics, "view-project", { project: items[itemIndex].title });

    if (shift === 1 || shift === 2) updateSlide(2, 2);
    if (shift === -1 || shift === -2) updateSlide(3, -2);
    if (shift === 2) updateSlide(1, 1);
    if (shift === -2) updateSlide(4, -1);

    previousSlideIndex = slideIndex;
  });

  function updateSlide(x: number, y: number) {
    const i = (slideIndex + n + x) % n;
    const v = (itemIndex + m + y) % m;
    visibleItemIndexes[i] = v;
  }

  function goLeft() {
    slideIndex = (slideIndex + n - 1) % n;
  }

  function goRight() {
    slideIndex = (slideIndex + 1) % n;
  }
</script>

<div class="main">
  <Button onclick={goLeft}>
    <ChevronLeftIcon width={40} height={40} />
  </Button>
  <div class="carousel">
    {#each slideIndexes as index}
      <input
        type="radio"
        name="slider"
        id={`s${index}`}
        value={index}
        bind:group={slideIndex}
      />
    {/each}

    {#each visibleItemIndexes as visibleItemIndex, index}
      <label
        for={`s${index}`}
        id={`slide${index}`}
        style={`background-image: url(${items[visibleItemIndex].image});`}
      >
      </label>
    {/each}
  </div>
  <Button onclick={goRight}>
    <ChevronRightIcon width={40} height={40} />
  </Button>
</div>

<style lang="scss">
  [type="radio"] {
    display: none;
  }

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--s32);
  }

  .carousel {
    width: 100%;
    max-width: 1000px;
    height: 250px;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
    // border: solid 3px pink;

    label {
      margin: auto;
      width: 60%;
      height: 100%;
      position: absolute;
      left: 0;
      right: 0;
      cursor: pointer;
      background: black;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border: solid 1px #1d1d1d;
      border-radius: var(--border-radius);
      transition: transform 0.4s ease;
      display: flex;
      justify-content: end;
      align-items: end;
    }

    #s0:checked ~ #slide3,
    #s1:checked ~ #slide4,
    #s2:checked ~ #slide0,
    #s3:checked ~ #slide1,
    #s4:checked ~ #slide2 {
      box-shadow:
        0 1px 4px 0 rgba(0, 0, 0, 0.37),
        var(--box-shadow);
      transform: translate3d(-50%, 0, -200px);
    }

    #s0:checked ~ #slide4,
    #s1:checked ~ #slide0,
    #s2:checked ~ #slide1,
    #s3:checked ~ #slide2,
    #s4:checked ~ #slide3 {
      box-shadow:
        0 6px 10px 0 rgba(0, 0, 0, 0.3),
        0 2px 2px 0 rgba(0, 0, 0, 0.2),
        var(--box-shadow);
      transform: translate3d(-25%, 0, -100px);
    }

    #s0:checked ~ #slide0,
    #s1:checked ~ #slide1,
    #s2:checked ~ #slide2,
    #s3:checked ~ #slide3,
    #s4:checked ~ #slide4 {
      box-shadow:
        0 13px 25px 0 rgba(0, 0, 0, 0.3),
        0 11px 7px 0 rgba(0, 0, 0, 0.19),
        var(--box-shadow);
      transform: translate3d(0, 0, 0);
    }

    #s0:checked ~ #slide1,
    #s1:checked ~ #slide2,
    #s2:checked ~ #slide3,
    #s3:checked ~ #slide4,
    #s4:checked ~ #slide0 {
      box-shadow:
        0 6px 10px 0 rgba(0, 0, 0, 0.3),
        0 2px 2px 0 rgba(0, 0, 0, 0.2),
        var(--box-shadow);
      transform: translate3d(25%, 0, -100px);
    }

    #s0:checked ~ #slide2,
    #s1:checked ~ #slide3,
    #s2:checked ~ #slide4,
    #s3:checked ~ #slide0,
    #s4:checked ~ #slide1 {
      box-shadow:
        0 1px 4px 0 rgba(0, 0, 0, 0.37),
        var(--box-shadow);
      transform: translate3d(50%, 0, -200px);
    }
  }
</style>
