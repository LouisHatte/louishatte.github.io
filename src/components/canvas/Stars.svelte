<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";

  import { theme } from "@/lib/styles/colors";

  let container: HTMLDivElement;
  const starMaterial = new THREE.MeshBasicMaterial({ color: $theme["color2"] });

  $effect(() => {
    starMaterial.color.set($theme["color2"]);
  });

  onMount(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.render(scene, camera);
    container.appendChild(renderer.domElement);

    const starGeometry = new THREE.SphereGeometry(0.05, 8, 8);

    for (let i = 0; i < 500; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.x = (Math.random() - 0.5) * 50;
      star.position.y = (Math.random() - 0.5) * 50;
      star.position.z = (Math.random() - 0.5) * 50;
      scene.add(star);
    }

    function animate() {
      requestAnimationFrame(animate);
      scene.rotation.y += 0.002;
      scene.rotation.x += 0.001;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    return () => {
      renderer.dispose();
    };
  });
</script>

<div bind:this={container} class="stars"></div>

<style lang="scss">
  .stars {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: var(--z-last);
  }
</style>
