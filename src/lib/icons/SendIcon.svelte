<script lang="ts">
  import SvgIcon, { type IconProps } from "@/lib/icons/SvgIcon.svelte";

  let props: IconProps = $props();
</script>

<SvgIcon {...props}>
  <path
    d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z"
  />
  <path d="M6.5 12h14.5" />
</SvgIcon>
