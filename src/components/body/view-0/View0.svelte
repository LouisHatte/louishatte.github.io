<script lang="ts">
  import { _ } from "@/classes/Locale";
  import { theme } from "@/lib/styles/colors";
</script>

<div class="main">
  <div class="scroll _gradient" style="--gradient: {$theme['color5']}">
    {$_("welcome-scroll")}
  </div>
</div>

<style lang="scss">
  .main {
    position: relative;
    height: 100%;
  }

  .scroll {
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    bottom: var(--s32);
    left: 50%;
    transform: translateX(-50%);
  }
</style>
