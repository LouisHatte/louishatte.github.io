<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<div class="copyright">
  © Copyright {new Date().getFullYear()}. Made by Louis Hatté. All Rights
  Reserved.
</div>

<style lang="scss">
  .copyright {
    display: flex;
    justify-content: center;
    font-size: var(--xs-font-size);
    margin-top: var(--s24);
  }
</style>
