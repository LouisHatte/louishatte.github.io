<script lang="ts">
  import Button from "@/lib/buttons/Button.svelte";

  import HeartIcon from "@/components/HeartIcon.svelte";

  let liked = $state(false);
</script>

<Button onclick={() => (liked = !liked)}>
  <HeartIcon {liked} />
  1.1k
</Button>
