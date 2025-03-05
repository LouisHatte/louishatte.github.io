<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";

  import { ThreeHelper } from "@/utils/threeJS";
  import { BASE_URL } from "@/constants";

  const modelPaths = [`${BASE_URL}the-coin.glb`];
  const texturePaths = [`${BASE_URL}heightmap-clean.png`];

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
    texture = textures[0];
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        console.log("A!", child);
        console.log("UVs:", child.geometry.attributes.uv);
        const material = child.material.clone();
        material.map = texture;
        material.needsUpdate = true;
        // material.displacementMap = texture;
        // material.displacementScale = 0.1;
        child.material = material;
      }
    });

    scene.add(model);

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
</style>
