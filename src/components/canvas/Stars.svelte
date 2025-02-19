<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { theme } from "@/lib/styles/colors";
  import { view } from "@/stores/viewIndex.svelte";
  import { tick } from "svelte";

  let divRef: HTMLDivElement;
  const starMaterial = new THREE.MeshBasicMaterial({ color: $theme["color2"] });

  $effect(() => {
    starMaterial.color.set($theme["color2"]);
  });

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let isRotating = true;

  // @ts-expect-error
  $effect(async () => {
    $view;
    console.log("A!");
    isRotating = false;
    await tick();

    const startPosition = camera.position.clone();
    const targetPosition = new THREE.Vector3(...$view.position);
    let progress = 0;

    function smoothMove() {
      if (progress < 1) {
        progress += 0.02;
        camera.position.lerpVectors(startPosition, targetPosition, progress);
        camera.lookAt(0, 0, 0);
        requestAnimationFrame(smoothMove);
      } else {
        isRotating = true;
      }
    }
    smoothMove();
  });

  onMount(() => {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      75,
      divRef.clientWidth / divRef.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(divRef.clientWidth, divRef.clientHeight);
    divRef.appendChild(renderer.domElement);

    const starGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    for (let i = 0; i < 500; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      star.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
      scene.add(star);
    }

    function animate() {
      requestAnimationFrame(animate);
      if (isRotating) {
        scene.rotation.y += 0.002;
        scene.rotation.x += 0.001;
      }
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = divRef.clientWidth / divRef.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(divRef.clientWidth, divRef.clientHeight);
    });

    return () => {
      renderer.dispose();
    };
  });
</script>

<div bind:this={divRef} class="stars"></div>

<style lang="scss">
  .stars {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: var(--z-last);
  }
</style>
