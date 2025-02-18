<span class="loader"></span>

<style lang="scss">
  .loader {
    position: relative;
    width: 24px;
    height: 24px;
    display: inline-block;
    border: 2px solid var(--color1);
    border-radius: 50%;
    animation: rotation 1s linear infinite;
  }
  .loader::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid;
    border-color: var(--color1) transparent;
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
