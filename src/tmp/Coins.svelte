<!-- <script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";

  import { BASE_URL } from "@/constants";
  import { ThreeHelper } from "@/utils/threeJS";

  const modelPaths = [
    `${BASE_URL}coin-blue.glb`,
    `${BASE_URL}coin-green.glb`,
    `${BASE_URL}coin-red.glb`,
  ];

  const texturePaths = [
    `${BASE_URL}heightmap-clean.png`,
    `${BASE_URL}heightmap-destroy.png`,
    `${BASE_URL}heightmap-scratched.png`,
  ];

  let divRef: HTMLDivElement;

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;

  let models: THREE.Group[] = [];
  let textures: THREE.Texture[];
  let modelIndex = 0;
  let prevYRotation: number;

  let requestId: number;

  async function initScene() {
    ({ scene, camera, renderer, models, textures } =
      await ThreeHelper.create3DScene({
        width: divRef.clientWidth,
        height: divRef.clientHeight,
        modelPaths,
        texturePaths,
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
    height: 85%;
  }
</style> -->
