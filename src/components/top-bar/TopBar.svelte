<script lang="ts">
  import EthIcon from "@/components/top-bar/EthIcon.svelte";
  import LocaleSwitch from "@/components/top-bar/LocaleSwitch.svelte";
  import LikeButton from "@/components/top-bar/LikeButton.svelte";
  import MysteryButton from "@/components/top-bar/MysteryButton.svelte";
</script>

<div class="main">
  <EthIcon />
  <div class="buttons">
    <LocaleSwitch />
    <LikeButton />
    <MysteryButton />
  </div>
</div>

<style lang="scss">
  .main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .buttons {
      display: flex;
      gap: var(--s24);
    }
  }
</style>
