<script lang="ts">
  import type { IconProps } from "@/lib/icons/SVGIcon.svelte";
  import SvgIcon from "@/lib/icons/SVGIcon.svelte";

  let props: IconProps = $props();
</script>

<SvgIcon {...props}>
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
  <path d="M12 9h.01"></path>
  <path d="M11 12h1v4h1"></path>
</SvgIcon>
