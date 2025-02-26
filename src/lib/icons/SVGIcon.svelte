<script lang="ts" module>
  export type IconProps = {
    fill?: string;
    height?: number;
    width?: number;
  };
</script>

<script lang="ts">
  import type { Snippet } from "svelte";

  import { theme } from "@/lib/styles/colors";

  type Props = StyleProps &
    IconProps & {
      children: Snippet;
    };

  let {
    children,
    className = "",
    fill = "none",
    height = 24,
    style = "",
    width = 24,
  }: Props = $props();
</script>

<svg
  class={className}
  {style}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  {width}
  {height}
  {fill}
  stroke={$theme["color1"]}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  {@render children()}
</svg>
