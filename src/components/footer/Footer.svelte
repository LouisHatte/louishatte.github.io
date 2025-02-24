<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<div class="main">
  © Copyright {new Date().getFullYear()}. {$_("footer-copyright")}
  <div class="version">Version - Beta</div>
</div>

<style lang="scss">
  .main {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;
    font-size: var(--xs-font-size);
    color: var(--color5);
    // border: solid 3px green;
  }

  .version {
    position: absolute;
    top: 0;
    right: 0;
    align-self: self-end;
    font-size: var(--s-font-size);
    color: var(--color3);
    // border: solid 3px red;
  }
</style>
