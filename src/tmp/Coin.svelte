<!-- <script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";

  import { ThreeHelper } from "@/utils/threeJS";

  const modelPaths = ["/coin-red.glb"];

  let divRef: HTMLDivElement;

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;

  let models: THREE.Group[] = [];
  let model: THREE.Group;

  let requestId: number;

  async function initScene() {
    ({ scene, camera, renderer, models } = await ThreeHelper.create3DScene({
      width: divRef.clientWidth,
      height: divRef.clientHeight,
      modelPaths,
      alpha: true,
    }));

    model = models[0];
    renderer.render(scene, camera);
    camera.position.z = 25;
    divRef.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    animate();
  }

  function animate() {
    requestId = requestAnimationFrame(animate);
    model.rotation.y += 0.01;
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
    height: 100%;
  }
</style> -->
