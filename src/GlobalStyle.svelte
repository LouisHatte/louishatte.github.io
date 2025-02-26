<div></div>

<style lang="scss">
  :global(._shake:hover) {
    animation: _shake 0.5s ease-in-out;
  }

  @keyframes _shake {
    0%,
    100% {
      transform: translateX(0) rotate(0deg);
    }
    25% {
      transform: translateX(-2px) rotate(-3deg);
    }
    50% {
      transform: translateX(2px) rotate(3deg);
    }
    75% {
      transform: translateX(-2px) rotate(-3deg);
    }
  }

  :global(._gradient) {
    background: linear-gradient(
      to right,
      #008baa,
      #7e42a7,
      #6600c5,
      #6070fd,
      #2a46ff,
      #0099ff,
      #008ea0
    );
    background-size: 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: _gradient 4s linear infinite;
  }

  @keyframes _gradient {
    to {
      background-position: 200%;
    }
  }

  :global(._pulse) {
    &:hover,
    &:focus {
      border: solid 1px var(--color1);
      box-shadow: var(--box-shadow);
      transition:
        border 0.3s ease-in-out,
        box-shadow 0.3s ease-in-out;
      animation: _pulse 2s infinite alternate ease-in-out;
    }
  }

  @keyframes _pulse {
    0% {
      box-shadow: 0px 0px 7px 2px var(--color0);
    }
    100% {
      box-shadow: 0px 0px 7px 2px var(--color1);
    }
  }
</style>
