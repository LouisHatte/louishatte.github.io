<script lang="ts">
  import Button, { type ButtonProps } from "@/lib/buttons/Button.svelte";

  type Props = ButtonProps & {
    href: string;
  };

  let { href, ...rest }: Props = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer">
  <Button {...rest}></Button>
</a>
