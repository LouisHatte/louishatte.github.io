<script lang="ts">
  import * as THREE from "three";
  import { onMount } from "svelte";

  let container: HTMLElement;

  onMount(() => {
    // Create the Scene
    const scene = new THREE.Scene();

    // Set up the Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Set up the Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create Stars
    const starGeometry = new THREE.SphereGeometry(0.05, 8, 8); // Small spheres
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White color

    for (let i = 0; i < 500; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);

      // Randomize star positions
      star.position.x = (Math.random() - 0.5) * 50; // Random X in [-25, 25]
      star.position.y = (Math.random() - 0.5) * 50; // Random Y in [-25, 25]
      star.position.z = (Math.random() - 0.5) * 50; // Random Z in [-25, 25]

      scene.add(star);
    }

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      // Slowly rotate the entire scene for a dynamic effect
      scene.rotation.y += 0.002;
      scene.rotation.x += 0.001;

      renderer.render(scene, camera);
    }
    animate();

    // Handle Resizing
    window.addEventListener("resize", () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // Cleanup on Unmount
    return () => {
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  });
</script>

<div bind:this={container} class="three-container"><slot></slot></div>

<style>
  .three-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: var(--z-last);
  }
</style>
