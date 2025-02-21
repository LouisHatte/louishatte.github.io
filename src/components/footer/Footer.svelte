<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<div class="main">
  © Copyright {new Date().getFullYear()}. Made by Louis Hatté. All Rights
  Reserved.
</div>

<style lang="scss">
  .main {
    display: flex;
    justify-content: center;
    flex-grow: 0;
    font-size: var(--xs-font-size);
    color: var(--color5);
  }
</style>
