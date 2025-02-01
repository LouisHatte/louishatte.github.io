<script lang="ts">
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  import { onMount } from "svelte";

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    document.getElementById("bitcoin")?.appendChild(renderer.domElement);

    //   const renderer = new THREE.WebGLRenderer({ alpha: true });
    //   renderer.setSize(window.innerWidth, window.innerHeight);
    //   renderer.render(scene, camera);
    //   document.getElementById("bitcoin")?.appendChild(renderer.domElement);

    // const light = new THREE.DirectionalLight(0xffffff, 1);
    // light.position.set(5, 10, 7.5);
    // scene.add(light);

    const light2 = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light2);

    const gltfLoader = new GLTFLoader();
    const textureLoader = new THREE.TextureLoader();

    gltfLoader.load("/reb4.glb", (gltf) => {
      const model = gltf.scene;

      const heightmap = textureLoader.load("/height.png", (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
      });

      model.traverse((child) => {
        // @ts-expect-error
        if (child.isMesh) {
          // Clone the existing material to retain original properties
          // @ts-expect-error
          const material = child.material.clone();
          material.map = heightmap; // Apply texture color
          material.displacementMap = heightmap; // Apply height map (optional)
          material.displacementScale = 1; // Adjust as needed

          // @ts-expect-error
          child.material = material;
        }
      });

      scene.add(model);
    });

    // Orbit controls for better viewing
    const controls = new OrbitControls(camera, renderer.domElement);

    // Set camera position
    camera.position.set(0, 0, 20);
    controls.update();

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });
</script>

<div id="bitcoin"></div>

<style>
  #bitcoin {
    width: 100vw;
    height: 100vh;
    margin: 0;
    background: radial-gradient(#292929, #000000);
    overflow: hidden;
  }
</style>
