<script>
  import SVGIcon from "@/lib/icons/SVGIcon.svelte";
</script>

<SVGIcon className="_arrows" width={64} height={128}>
  <path class="arrow-top" d="M18 3l-6 6M6 3l6 6" />
  <path class="arrow-middle" d="M18 10l-6 6M6 10l6 6" />
  <path class="arrow-bottom" d="M18 17l-6 6M6 17l6 6" />
</SVGIcon>

<style lang="scss">
  :global(._arrows) {
    position: absolute;
    bottom: var(--s32);
    left: 50%;
    transform: translateX(-50%);
    // height: 10%;
    // border: solid 3px red;

    path {
      stroke-width: 1px;
      animation: arrow 4s infinite;

      &.arrow-top {
        animation-delay: -0.5s;
      }

      &.arrow-middle {
        animation-delay: -0.25s;
      }

      &.arrow-bottom {
        animation-delay: 0s;
      }
    }
  }

  @keyframes arrow {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    20% {
      opacity: 0;
      transform: translateY(5px);
    }
    100% {
      opacity: 0;
      transform: translateY(5px);
    }
  }
</style>
