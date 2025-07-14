<!-- <script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";

  import { ThreeHelper } from "@/utils/threeJS";
  import { BASE_URL } from "@/constants";

  const texturePaths: string[] = []; // [`${BASE_URL}heightmap-clean.png`];

  let divRef: HTMLDivElement;

  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;

  let models: THREE.Group[] = [];
  let model: THREE.Group;
  let textures: THREE.Texture[];
  let texture: THREE.Texture;

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

    model = models[0];
    // texture = textures[0];
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material.clone();
        const existingTexture = material.map;
        if (existingTexture) {
          //   material.displacementMap = existingTexture;
          //   material.displacementScale = 0.008;
          //   material.map = existingTexture;
          //   material.metalness = 0.8;
          //   material.roughness = 0.2;
          // material.side = THREE.DoubleSide; // Render both sides
        }
        material.needsUpdate = true;
        child.material = material;
        // material.displacementScale = 0.1;
      }
    });

    scene.add(model);

    renderer.render(scene, camera);
    camera.position.z = 2;
    divRef.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(1, 0, 1);
    scene.add(directionalLight);

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
