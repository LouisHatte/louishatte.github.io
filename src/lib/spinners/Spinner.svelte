<span class="loader"></span>

<style lang="scss">
  .loader {
    position: relative;
    width: var(--s24);
    height: var(--s24);
    display: inline-block;
    border: 2px solid var(--color1);
    border-radius: 50%;
    animation: rotation 1s linear infinite;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: var(--s12);
      height: var(--s12);
      border-radius: 50%;
      border: 2px solid;
      border-color: var(--color1) transparent;
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
