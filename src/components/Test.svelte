<script>
  import { Spring } from "svelte/motion";

  const spring = new Spring(0, { stiffness: 0.1, damping: 0.1 });

  $effect(() => {
    console.log(spring.target);
  });
</script>

<input type="range" bind:value={spring.target} />
<input type="range" bind:value={spring.current} disabled />
