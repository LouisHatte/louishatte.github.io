<script lang="ts">
  import { _ } from "@/classes/Locale";
</script>

<div class="main">
  <div class="copyright">
    © Copyright {new Date().getFullYear()}. {$_("footer-copyright")}
  </div>
  <div class="version">Version - 1.0.0</div>
</div>

<style lang="scss">
  .main {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 0;

    .copyright {
      font-size: var(--xs-font-size);
      color: var(--color3);
    }

    .version {
      position: absolute;
      top: -3px;
      right: 0;
      font-size: var(--s-font-size);
      color: var(--color2);
    }
  }
</style>
