<script lang="ts">
  import { ThreeHelper } from "@/utils/threeJS";
  import { onMount } from "svelte";
  import * as THREE from "three";

  const modelPaths = ["/coin-blue.glb", "/coin-green.glb", "/coin-red.glb"];

  let divRef: HTMLDivElement;

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;

  let models: THREE.Group[] = [];
  let modelIndex = 0;
  let prevYRotation: number;

  let requestId: number;

  async function initScene() {
    ({ scene, camera, renderer, models } = await ThreeHelper.create3DScene({
      width: divRef.clientWidth,
      height: divRef.clientHeight,
      modelPaths,
      alpha: true,
    }));

    renderer.render(scene, camera);
    models.forEach((model, index) => {
      if (index !== 0) {
        model.visible = false;
      }
    });
    camera.position.z = 25;
    divRef.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    animate();
  }

  function animate() {
    requestId = requestAnimationFrame(animate);
    models.forEach((model) => (model.rotation.y += 0.01));
    const currentYRotation = Math.round(
      models[modelIndex].rotation.y % Math.PI
    );

    if (prevYRotation === 1 && currentYRotation === 2) {
      models[modelIndex].visible = false;
      modelIndex = (modelIndex + 1) % models.length;
      models[modelIndex].visible = true;
    }

    prevYRotation = currentYRotation;
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
</style>
