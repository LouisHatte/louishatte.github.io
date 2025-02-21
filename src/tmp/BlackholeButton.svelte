<script lang="ts">
  import Button from "@/lib/buttons/Button.svelte";
  import { onMount } from "svelte";

  const numPixels = 500;
  const rotationDuration = 30; // seconds, increased for smoother appearance with many pixels

  let canvas: HTMLCanvasElement;
  let ctx: any;
  let animationId: number;

  let pixels = $state(
    Array.from({ length: numPixels }, (_, i) => ({
      id: i,
      angle: (i / numPixels) * Math.PI * 2,
      speed: 0.5 + Math.random() * 0.1, // Varying speeds for more dynamic effect
      distance: 70 + Math.random() * 20, // Varying distances from the center
    }))
  );

  onMount(() => {
    ctx = canvas.getContext("2d");
    canvas.width = 320;
    canvas.height = 320;
    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    pixels.forEach((pixel) => {
      pixel.angle += ((Math.PI * 2) / (rotationDuration * 60)) * pixel.speed;

      const x = centerX + Math.cos(pixel.angle) * pixel.distance;
      const y = centerY + Math.sin(pixel.angle) * pixel.distance;

      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI * 2);
      ctx.fill();

      // Simple trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    });

    animationId = requestAnimationFrame(animate);
  }
</script>

<div class="main">
  <canvas bind:this={canvas} class="absolute top-0 left-0"></canvas>
  <Button>Flip!</Button>
</div>

<style lang="scss">
  .main {
    position: relative;
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: solid 3px red;

    canvas {
      position: absolute;
      top: 0;
      left: 0;
    }

    // button {
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   transform: translate(-50%, -50%);
    // }
  }
</style>
