<script lang="ts">
  import { onMount } from "svelte";

  type TestProps = {
    color?: String;
  };

  const { color }: TestProps = $props();
  console.log("A!");

  const elements = $state([0]);
  let a = $state(0);
  const double = $derived(a * 2);

  $effect(() => {
    if (a > 5) {
      alert("Count is too high!");
    }
  });

  onMount(() => {
    console.log("onMount");
  });

  function push() {
    elements.push(elements[elements.length - 1] + 1);
  }
  function increment() {
    a += 1;
  }
</script>

<button onclick={push}>PUSH!</button>
<button onclick={increment}>INCREMENT!</button>
elements:
{#each elements as e (e)}
  <div>{e}</div>
{/each}
a: {a}
double: {double}
