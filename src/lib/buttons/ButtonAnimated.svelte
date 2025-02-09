<script lang="ts">
  import Button, { type ButtonProps } from "@/lib/buttons/Button.svelte";

  let { _class, ...rest }: ButtonProps = $props();
</script>

<Button _class={"_glow " + _class} {...rest} />
