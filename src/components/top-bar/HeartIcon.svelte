<script lang="ts">
  import SvgIcon from "@/lib/icons/SvgIcon.svelte";

  type Props = {
    liked: boolean;
  };

  let { liked }: Props = $props();
</script>

<SvgIcon className={liked ? "_liked" : ""}>
  <path
    d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
  />
</SvgIcon>

<style lang="scss">
  :global(._liked) {
    fill: var(--color1);
    stroke: none;
    transition: all 0.5s;
    animation: _liked 0.5s 1;
  }

  @keyframes _liked {
    0% {
      transform: scale(1);
    }
    90% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1.1);
    }
  }
</style>
