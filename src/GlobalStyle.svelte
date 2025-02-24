<div></div>

<style lang="scss">
  :global(._send-button) {
    padding: var(--s4) var(--s32) !important;
  }

  :global(._is-border) {
    border: solid 1px var(--color1) !important;
    border-radius: var(--border-radius);
  }

  :global(._shake:hover) {
    animation: _shake 0.5s ease-in-out !important;
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
    animation: _animate-gradient 4s linear infinite;
  }

  @keyframes _animate-gradient {
    to {
      background-position: 200%;
    }
  }
</style>
