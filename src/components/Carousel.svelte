<script lang="ts">
  type Item = {
    title: string;
  };

  type Props = {
    items: Item[];
  };

  let { items }: Props = $props();

  const n = 5;
  const len = items.length;
  const itemIndexes = Array.from({ length: len }, (_, index) => index);

  let visibleIndexes = $state([0, 1, 2, 3, 4]);
  let index = $state(2);
  let previousIndex = $state(2);
  let indexItem = 2;

  $effect(() => {
    if (index === previousIndex) return;

    const diff = index - previousIndex;
    const cyclicDiff = diff > 0 ? (diff + n) % n : (diff - n) % n;

    const shift =
      cyclicDiff > 2 || cyclicDiff < -2
        ? cyclicDiff + Math.sign(cyclicDiff) * n * -1
        : cyclicDiff;

    if (shift === 1) {
      indexItem = (indexItem + 1) % len;
      const i = (index + 2) % n;
      const v = (indexItem + 2) % len;
      visibleIndexes[i] = v;
    }

    if (shift === -1) {
      indexItem = (indexItem + len - 1) % len;
      const i = (index + 3) % n;
      const v = (indexItem + len - 2) % len;
      visibleIndexes[i] = v;
    }

    if (shift === 2) {
      indexItem = (indexItem + 2) % len;
      const i1 = (index + 2) % n;
      const v1 = (indexItem + 2) % len;
      visibleIndexes[i1] = v1;

      const i2 = (index + 1) % n;
      const v2 = (indexItem + 1) % len;
      visibleIndexes[i2] = v2;
    }

    if (shift === -2) {
      indexItem = (indexItem + len - 2) % len;
      const i1 = (index + 3) % n;
      const v1 = (indexItem + len - 2) % len;
      visibleIndexes[i1] = v1;

      const i2 = (index + 4) % n;
      const v2 = (indexItem + len - 1) % len;
      visibleIndexes[i2] = v2;
    }

    previousIndex = index;
  });

  function updateContent(_x: number, shift: number) {
    const i = (index + _x) % n;
    const v = (indexItem + _x + shift) % len;
    visibleIndexes[i] = v;

    // console.log("i: ", i);
    // console.log("v: ", v);
  }
</script>

<section id="slider">
  <input type="radio" name="slider" id="s0" value={0} bind:group={index} />
  <input type="radio" name="slider" id="s1" value={1} bind:group={index} />
  <input type="radio" name="slider" id="s2" value={2} bind:group={index} />
  <input type="radio" name="slider" id="s3" value={3} bind:group={index} />
  <input type="radio" name="slider" id="s4" value={4} bind:group={index} />

  {#each visibleIndexes as visibleItemIndex, index}
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
