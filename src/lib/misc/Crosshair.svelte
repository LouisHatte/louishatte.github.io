<script lang="ts">
  type Vec2D = [number, number];

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const circleWidth = 20;
  const circleDelay = 0.3;
  const pointWidth = 4;
  const pointDelay = 0.4;

  let mouse: Vec2D = $state([0, 0]);
  let circle: Vec2D = $state([centerX, centerY]);
  let point: Vec2D = $state([centerX, centerY]);

  function updateMousePosition(event: MouseEvent) {
    mouse = [event.clientX, event.clientY];
  }

  // Linear interpolation
  function lerp(start: Vec2D, end: Vec2D, t: number): Vec2D {
    return [
      start[0] + (end[0] - start[0]) * t,
      start[1] + (end[1] - start[1]) * t,
    ];
  }

  function smoothFollow() {
    circle = lerp(circle, mouse, circleDelay);
    point = lerp(point, mouse, pointDelay);
    requestAnimationFrame(smoothFollow);
  }
</script>

<svelte:window
  on:mousemove={updateMousePosition}
  on:mousemove|once={smoothFollow}
/>
<div
  class="shape circle"
  style="--circle-x: {circle[0]}px; --circle-y: {circle[1]}px; --circle-width: {circleWidth}px;"
></div>
<div
  class="shape point"
  style="--point-x: {point[0]}px; --point-y: {point[1]}px; --point-width: {pointWidth}px;"
></div>

<style>
  .shape {
    position: absolute;
    pointer-events: none;
    border-radius: 50%;
    border: solid 1px white;
    transition: transform 0.1s ease-out;
    z-index: var(--z-first);
  }

  .circle {
    --x: var(--circle-x);
    --y: var(--circle-y);
    --size: var(--circle-width);

    left: calc(var(--x) - var(--size) / 2);
    top: calc(var(--y) - var(--size) / 2);
    width: var(--size);
    height: var(--size);
  }

  .point {
    --x: var(--point-x);
    --y: var(--point-y);
    --size: var(--point-width);

    left: calc(var(--x) - var(--size) / 2);
    top: calc(var(--y) - var(--size) / 2);
    width: var(--size);
    height: var(--size);
    background-color: white;
  }
</style>
