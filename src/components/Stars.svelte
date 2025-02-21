<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import gsap from "gsap";

  import { theme } from "@/lib/styles/colors";
  import { view } from "@/stores/view";
  import { create3DScene } from "@/utils/threeJS";
  import { tick } from "svelte";

  let divRef: HTMLDivElement;
  const starMaterial = new THREE.MeshBasicMaterial({ color: $theme["color2"] });

  $effect(() => {
    starMaterial.color.set($theme["color2"]);
  });

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let models: THREE.Group[] = [];

  let requestId: number;

  $effect(() => {
    $view;
    if (!camera) return;

    gsap.to(camera.position, {
      x: $view.position[0],
      y: $view.position[1],
      z: $view.position[2],
      duration: 1.5,
      onUpdate: () => camera.lookAt(0, 0, 0),
    });
  });

  async function initScene() {
    ({ scene, camera, renderer, models } = await create3DScene({
      width: divRef.clientWidth,
      height: divRef.clientHeight,
      modelPaths: [],
    }));

    camera.position.z = 5;
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

    animate();
  }

  function animate() {
    requestId = requestAnimationFrame(animate);
    scene.rotation.y += 0.002;
    scene.rotation.x += 0.001;
    renderer.render(scene, camera);
  }

  onMount(() => {
    initScene();
    window.addEventListener("resize", handleResize);

    return cleanup;
  });

  function handleResize() {
    if (!camera || !renderer) return;

    camera.aspect = divRef.clientWidth / divRef.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(divRef.clientWidth, divRef.clientHeight);
  }

  function cleanup() {
    if (renderer && renderer.domElement) {
      divRef.removeChild(renderer.domElement);
      renderer.dispose();
    }
    cancelAnimationFrame(requestId);
    window.removeEventListener("resize", handleResize);
  }
</script>

<div bind:this={divRef}></div>

<style lang="scss">
  div {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: var(--z-last);
  }
</style>
