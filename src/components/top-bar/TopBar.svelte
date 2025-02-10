<script lang="ts">
  import ethSVG from "@/assets/icons/eth.svg";
  import LikeButton from "@/components/top-bar/LikeButton.svelte";
  import LocaleSwitch from "@/components/top-bar/LocaleSwitch.svelte";
  import MysteryButton from "@/components/top-bar/MysteryButton.svelte";
</script>

<div class="main">
  <img src={ethSVG} alt="E" width={32} height={32} />
  <div class="buttons">
    <LocaleSwitch />
    <LikeButton />
    <MysteryButton />
  </div>
</div>

<style lang="scss">
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .buttons {
      display: flex;
      gap: var(--s24);
    }
  }
</style>
