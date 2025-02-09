<script lang="ts">
  import ethSVG from "@/assets/icons/eth.svg";
  import ButtonLike from "@/components/ButtonLike.svelte";
  import LanguageSwitch from "@/components/LanguageSwitch.svelte";
  import Spinner from "@/lib/spinners/Spinner.svelte";
</script>

<div class="main">
  <img src={ethSVG} alt="E" width={32} height={32} />
  <div class="buttons">
    <LanguageSwitch />
    <ButtonLike />
    <Spinner />
  </div>
</div>

<style lang="scss">
  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px red;

    .buttons {
      display: flex;
      gap: var(--s24);
    }
  }
</style>
