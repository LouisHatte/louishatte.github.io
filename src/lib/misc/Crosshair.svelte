<script lang="ts">
  import { Spring, Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const circleDiameter = 25;

  type SubCircleTween = Tween<{
    diameter: number;
    opacity: number;
  }>;
  type SubCircle = {
    id: number;
    x: number;
    y: number;
    tween: SubCircleTween;
  };

  let subCircles: SubCircle[] = $state([]);

  const coordinates = new Spring(
    { x: centerX, y: centerY },
    {
      stiffness: 0.1,
      damping: 0.3,
    }
  );

  function createSubCircle(event: MouseEvent) {
    const tween: SubCircleTween = new Tween(
      { diameter: 0, opacity: 1 },
      {
        duration: 1000,
        easing: cubicOut,
      }
    );

    subCircles.push({
      id: Date.now(),
      x: event.clientX,
      y: event.clientY,
      tween,
    });
    tween.set({ diameter: circleDiameter + 50, opacity: 0 });

    setTimeout(() => {
      subCircles = subCircles.filter((c) => c.id !== subCircles[0].id);
    }, 1000);
  }
</script>

<svelte:window
  onmousemove={(e) => coordinates.set({ x: e.clientX, y: e.clientY })}
  onmousedown={createSubCircle}
/>

<div
  class="shape"
  style={`--x: ${coordinates.current.x}px; --y: ${coordinates.current.y}px; --size: ${circleDiameter}px;`}
></div>
{#each subCircles as { id, x, y, tween } (id)}
  <div
    class="shape"
    style={`--x: ${x}px; --y: ${y}px; --size: ${tween.current.diameter}px; --opacity: ${tween.current.opacity}`}
  ></div>
{/each}

<style>
  .shape {
    position: absolute;
    pointer-events: none;
    border-radius: 50%;
    border: solid 1px var(--color1);
    z-index: var(--z-first);

    left: calc(var(--x) - var(--size) / 2);
    top: calc(var(--y) - var(--size) / 2);
    width: var(--size);
    height: var(--size);
    opacity: var(--opacity);
  }
</style>
