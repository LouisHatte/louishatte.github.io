<div class="loader"></div>

<style lang="scss">
  .loader {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;

    &:after,
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--white);
      animation: animloader 2s linear infinite;
    }

    &:after {
      animation-delay: 1s;
    }
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
</style>
