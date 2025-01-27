<script lang="ts">
  type Item = {
    title: string;
  };

  type Props = {
    items: Item[];
  };

  let { items }: Props = $props();

  const cardIndexes = [0, 1, 2, 3, 4];
  const n = cardIndexes.length;
  const m = items.length;

  let visibleItemsIndexes = $state([0, 1, 2, 3, 4]);
  let cardIndex = $state(2);

  let previousCardIndex = 2;
  let indexItem = 2;

  $effect(() => {
    if (cardIndex === previousCardIndex) return;

    const diff = cardIndex - previousCardIndex;
    const cyclicDiff = diff > 0 ? (diff + n) % n : (diff - n) % n;

    const shift =
      cyclicDiff > 2 || cyclicDiff < -2
        ? cyclicDiff + Math.sign(cyclicDiff) * n * -1
        : cyclicDiff;

    indexItem = (indexItem + m + shift) % m;

    if (shift === 1 || shift === 2) updateCard(2, 2);
    if (shift === -1 || shift === -2) updateCard(3, -2);
    if (shift === 2) updateCard(1, 1);
    if (shift === -2) updateCard(4, -1);

    previousCardIndex = cardIndex;
  });

  function updateCard(x: number, y: number) {
    const i = (cardIndex + n + x) % n;
    const v = (indexItem + m + y) % m;
    visibleItemsIndexes[i] = v;
  }
</script>

<section id="slider">
  {#each cardIndexes as index}
    <input
      type="radio"
      name="slider"
      id={`s${index}`}
      value={index}
      bind:group={cardIndex}
    />
  {/each}

  {#each visibleItemsIndexes as visibleItemIndex, index}
    <label for={`s${index}`} id={`slide${index}`}>
      {items[visibleItemIndex].title}
    </label>
  {/each}
</section>

<style lang="scss">
  [type="radio"] {
    display: none;
  }

  #slider {
    height: 35vw;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
  }

  #slider label {
    margin: auto;
    width: 60%;
    height: 100%;
    border-radius: 4px;
    position: absolute;
    left: 0;
    right: 0;
    cursor: pointer;
    transition: transform 0.4s ease;
  }

  #s0:checked ~ #slide3,
  #s1:checked ~ #slide4,
  #s2:checked ~ #slide0,
  #s3:checked ~ #slide1,
  #s4:checked ~ #slide2 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    transform: translate3d(-30%, 0, -200px);
  }

  #s0:checked ~ #slide4,
  #s1:checked ~ #slide0,
  #s2:checked ~ #slide1,
  #s3:checked ~ #slide2,
  #s4:checked ~ #slide3 {
    box-shadow:
      0 6px 10px 0 rgba(0, 0, 0, 0.3),
      0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(-15%, 0, -100px);
  }

  #s0:checked ~ #slide0,
  #s1:checked ~ #slide1,
  #s2:checked ~ #slide2,
  #s3:checked ~ #slide3,
  #s4:checked ~ #slide4 {
    box-shadow:
      0 13px 25px 0 rgba(0, 0, 0, 0.3),
      0 11px 7px 0 rgba(0, 0, 0, 0.19);
    transform: translate3d(0, 0, 0);
  }

  #s0:checked ~ #slide1,
  #s1:checked ~ #slide2,
  #s2:checked ~ #slide3,
  #s3:checked ~ #slide4,
  #s4:checked ~ #slide0 {
    box-shadow:
      0 6px 10px 0 rgba(0, 0, 0, 0.3),
      0 2px 2px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(15%, 0, -100px);
  }

  #s0:checked ~ #slide2,
  #s1:checked ~ #slide3,
  #s2:checked ~ #slide4,
  #s3:checked ~ #slide0,
  #s4:checked ~ #slide1 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
    transform: translate3d(30%, 0, -200px);
  }

  #slide0 {
    background: #00bcd4;
  }
  #slide1 {
    background: #4caf50;
  }
  #slide2 {
    background: #cddc39;
  }
  #slide3 {
    background: #ffc107;
  }
  #slide4 {
    background: #ff5722;
  }
</style>
