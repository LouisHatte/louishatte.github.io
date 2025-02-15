<script lang="ts">
  import type { IconProps } from "@/lib/icons/SvgIcon.svelte";
  import SvgIcon from "@/lib/icons/SvgIcon.svelte";

  let props: IconProps = $props();
</script>

<SvgIcon {...props}>
  <path d="M18 6l-12 12"></path>
  <path d="M6 6l12 12"></path>
</SvgIcon>
