<script lang="ts">
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const circleWidth = 20;
  const circleDelay = 0.3;
  const pointWidth = 4;
  const pointDelay = 0.4;

  let mouse: Vec2D = $state([0, 0]);
  let circle: Vec2D = $state([centerX, centerY]);
  let point: Vec2D = $state([centerX, centerY]);

  let circleStyle = $derived(
    `--x: ${circle[0]}px; --y: ${circle[1]}px; --size: ${circleWidth}px;`
  );
  let pointStyle = $derived(
    `--x: ${point[0]}px; --y: ${point[1]}px; --size: ${pointWidth}px;`
  );

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
<div class="shape" style={circleStyle}></div>
<div class="shape point" style={pointStyle}></div>

<style lang="scss">
  .shape {
    position: absolute;
    pointer-events: none;
    border-radius: 50%;
    border: solid 1px var(--white);
    transition: transform 0.1s ease-out;
    z-index: var(--z-first);

    left: calc(var(--x) - var(--size) / 2);
    top: calc(var(--y) - var(--size) / 2);
    width: var(--size);
    height: var(--size);
  }

  .point {
    background-color: var(--white);
  }
</style>
