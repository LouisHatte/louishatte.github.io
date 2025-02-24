<script lang="ts">
  import type { IconProps } from "@/lib/icons/SvgIcon.svelte";
  import SvgIcon from "@/lib/icons/SvgIcon.svelte";

  let props: IconProps = $props();
</script>

<SvgIcon {...props}>
  <path d="M9 6l6 6l-6 6" />
</SvgIcon>
