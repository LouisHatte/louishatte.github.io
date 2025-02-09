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
  import Modal from "@/lib/modals/Modal.svelte";
  import Slide from "./Slide.svelte";

  type Props = {
    items: SlideItem[];
  };

  let { items }: Props = $props();

  const slideIndexes = [0, 1, 2, 3, 4];
  const n = slideIndexes.length;
  const m = items.length;

  let visibleItemIndexes = $state(slideIndexes);
  let visibleItemModals = $state([false, false, false, false, false]);
  let slideIndex = $state(2);

  let previousSlideIndex = 2;
  let itemIndex = 2;

  $effect(() => {
    if (slideIndex === previousSlideIndex) return;

    const diff = slideIndex - previousSlideIndex;
    const cyclicDiff = diff > 0 ? (diff + n) % n : (diff - n) % n;

    const shift =
      cyclicDiff > 2 || cyclicDiff < -2
        ? cyclicDiff + Math.sign(cyclicDiff) * n * -1
        : cyclicDiff;

    itemIndex = (itemIndex + m + shift) % m;

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

  function openModal(index: number) {
    if (slideIndex !== index) return;
    visibleItemModals[index] = true;
  }
</script>

<div class="slider">
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
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <label
      for={`s${index}`}
      id={`slide${index}`}
      onclick={() => openModal(index)}
      onkeydown={() => {}}
      style={`background-image: url(${items[visibleItemIndex].image});`}
    >
      <div class="title">{items[visibleItemIndex].year}</div>
    </label>
    <Modal
      bind:show={visibleItemModals[visibleItemIndex]}
      title={`${items[visibleItemIndex].category} - ${items[visibleItemIndex].title}`}
    >
      hello
    </Modal>
  {/each}
</div>

<style lang="scss">
  [type="radio"] {
    display: none;
  }

  .slider {
    width: 70vw;
    height: 300px;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;

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

      .title {
        color: var(--black);
        font-size: var(--xl-font-size);
        font-weight: 900;
        margin-right: var(--s12);
      }
    }

    #s0:checked ~ #slide3,
    #s1:checked ~ #slide4,
    #s2:checked ~ #slide0,
    #s3:checked ~ #slide1,
    #s4:checked ~ #slide2 {
      box-shadow:
        0 1px 4px 0 rgba(0, 0, 0, 0.37),
        var(--white-box-shadow);
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
        var(--white-box-shadow);
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
        var(--white-box-shadow);
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
        var(--white-box-shadow);
      transform: translate3d(25%, 0, -100px);
    }

    #s0:checked ~ #slide2,
    #s1:checked ~ #slide3,
    #s2:checked ~ #slide4,
    #s3:checked ~ #slide0,
    #s4:checked ~ #slide1 {
      box-shadow:
        0 1px 4px 0 rgba(0, 0, 0, 0.37),
        var(--white-box-shadow);
      transform: translate3d(50%, 0, -200px);
    }
  }
</style>
