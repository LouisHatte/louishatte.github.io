<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { GLTFLoader } from "three-stdlib";

  let container: HTMLDivElement;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;

  onMount(async () => {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/coin-red.glb", (gltf) => {
      const model = gltf.scene;
      scene.add(model);
    });

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.render(scene, camera);
    container.appendChild(renderer.domElement);

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    topLight.castShadow = true;
    scene.add(topLight);

    const bottomLight = new THREE.DirectionalLight(0xffffff, 1);
    bottomLight.position.set(-500, -500, -500);
    bottomLight.castShadow = true;
    scene.add(bottomLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 1);
    scene.add(ambientLight);

    function animate() {
      requestAnimationFrame(animate);
      scene.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    window.addEventListener("resize", function () {
      const container = document.getElementById("cube-container")!;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    animate();
  });
</script>

<div bind:this={container}></div>

<style>
  div {
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: var(--z-last);
  }
</style>
