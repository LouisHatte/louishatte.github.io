<script lang="ts">
  import type { Snippet } from "svelte";

  type OrbitingItem = {
    position: number;
    imageUrl: string;
  };

  type Props = {
    children: Snippet;
    radius?: number;
    speed?: number;
    reverse?: boolean;
    orbitingItems: OrbitingItem[];
  };

  let {
    children,
    radius = 100,
    speed = 10,
    reverse = false,
    orbitingItems,
  }: Props = $props();
</script>

<div class="orbit-wrapper">
  <div
    class="orbit-box"
    style:--radius="{radius}px"
    style:--speed="{speed}s"
    style:--direction={reverse ? -1 : 1}
  >
    <div class="orbit-path">
      {#each orbitingItems as { position, imageUrl }}
        <div class="orbiting-wrapper" style:--position="{position}deg">
          <div class="orbiting-box">
            <img src={imageUrl} width={35} height={35} alt="I" />
          </div>
        </div>
      {/each}
    </div>
    <div class="center-box">
      {@render children()}
    </div>
  </div>
</div>

<style lang="scss">
  .orbit-wrapper {
    position: absolute;

    .orbit-box {
      position: relative;
      width: calc(var(--radius) * 2);
      height: calc(var(--radius) * 2);
      display: flex;
      align-items: center;
      justify-content: center;

      .orbit-path {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px dashed var(--color3);
        border-radius: 50%;

        .orbiting-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          animation: orbit var(--speed) linear infinite;

          .orbiting-box {
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(calc(var(--radius) * -1), -50%);
            animation: counter-rotate var(--speed) linear infinite;
          }
        }
      }

      .center-box {
        position: absolute;
      }
    }
  }

  @keyframes orbit {
    from {
      transform: rotate(var(--position));
    }
    to {
      transform: rotate(calc(var(--position) + var(--direction) * 1turn));
    }
  }

  @keyframes counter-rotate {
    from {
      transform: translate(calc(var(--radius) * -1), -50%)
        rotate(var(--position));
    }
    to {
      transform: translate(calc(var(--radius) * -1), -50%)
        rotate(calc(var(--position) + var(--direction) * -1turn));
    }
  }
</style>
