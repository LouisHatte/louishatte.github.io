<div></div>

<style lang="scss">
  :global(._send-button) {
    padding: var(--s4) var(--s32) !important;
  }

  :global(._send-button_M) {
    padding: var(--s12) var(--s96) !important;
    border-radius: var(--border-radius_M) !important;
  }

  :global(._glow) {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      z-index: var(--z-last);
      background: linear-gradient(
        45deg,
        #4c4c4c,
        #909090,
        #e0e0e0,
        #ababab,
        #aeaeae,
        #363636,
        #424242,
        #636363,
        #4c4c4c
      );
      background-size: 400%;
      border-radius: var(--border-radius);
      filter: blur(5px);
      opacity: 0;
      animation: glowing 20s linear infinite;
      transition: opacity 0.2s ease-in-out;
    }

    &:active {
      color: var(--black);
    }

    &:hover:before {
      opacity: 1;
    }
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
</style>
