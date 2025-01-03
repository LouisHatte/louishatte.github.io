<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { GLTFLoader } from "three-stdlib";
  // @ts-expect-error
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

  let model: THREE.Group | null = null;

  onMount(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 20);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    document.getElementById("bitcoin")?.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load("/piece_txt_spec_disp.glb", (gltf) => {
      gltf.scene.traverse((node) => {
        if ((node as THREE.Mesh).isMesh) {
          const mesh = node as THREE.Mesh;
          const material = mesh.material as THREE.MeshStandardMaterial;

          material.metalness = 0.5; // black without this line
        }
      });

      model = gltf.scene;
      scene.add(model);
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    function animate() {
      requestAnimationFrame(animate);
      // if (model) {
      //   model.rotation.y += 0.01;
      // }
      renderer.render(scene, camera);
    }

    window.addEventListener("resize", function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

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
