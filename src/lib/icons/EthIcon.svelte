<script lang="ts">
  import type { IconProps } from "@/lib/icons/SVGIcon.svelte";
  import SvgIcon from "@/lib/icons/SVGIcon.svelte";

  let props: IconProps = $props();
</script>

<SvgIcon {...props}>
  <path d="M12 2 L5 12 H8 L12 21 L16 12 H19 Z" />
  <polygon points="12,7 10,10 12,13 14,10" stroke-width="1" fill="white" />
</SvgIcon>
