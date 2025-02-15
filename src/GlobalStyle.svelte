<div></div>

<style lang="scss">
  :global(._send-button) {
    padding: var(--s4) var(--s32) !important;
  }

  :global(._send-button_M) {
    padding: var(--s12) var(--s96) !important;
    border-radius: var(--border-radius_M) !important;
  }

  :global(._shake:hover) {
    animation: shake 0.5s ease-in-out;
  }

  @keyframes shake {
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
</style>
