<script lang="ts">
  import SvgIcon, { type IconProps } from "@/lib/icons/SvgIcon.svelte";

  let props: IconProps = $props();
</script>

<SvgIcon {...props}>
  <path d="M12 4l0 16" />
</SvgIcon>
