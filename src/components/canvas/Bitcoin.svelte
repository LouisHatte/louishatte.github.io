<script lang="ts">
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  import { onMount } from "svelte";

  onMount(() => {
    // Scene, camera, renderer setup
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

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 7.5);
    scene.add(light);

    // Load GLB model
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/cube2.glb", (gltf) => {
      const model = gltf.scene;

      // Load texture
      const textureLoader = new THREE.TextureLoader();
      const heightmap = textureLoader.load("/dice.png");

      // Apply the heightmap as a displacement map
      model.traverse((child) => {
        // @ts-expect-error
        if (child.isMesh) {
          // @ts-expect-error
          child.geometry.scale(-1, 1, 1);
          // @ts-expect-error
          child.geometry.computeVertexNormals();
          const material = new THREE.MeshStandardMaterial({
            // @ts-expect-error
            map: child.material.map, // Keep existing texture if any
            displacementMap: heightmap,
            displacementScale: 1, // Adjust for the intensity of the height effect
            side: THREE.DoubleSide,
          });
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
