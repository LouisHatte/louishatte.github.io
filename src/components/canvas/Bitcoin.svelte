<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { GLTFLoader } from "three-stdlib";
  // @ts-expect-error
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
  import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";

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
    document.getElementById("bitcoin")?.appendChild(renderer.domElement);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Add directional light for better shadows
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load("/piece_txt.glb", (gltf) => {
      gltf.scene.traverse((node) => {
        // @ts-expect-error
        if (node.isMesh) {
          const mesh = node as THREE.Mesh;
          const geometry = mesh.geometry;

          // Subdivide geometry for finer displacement
          const subdividedGeometry = BufferGeometryUtils.mergeVertices(
            geometry,
            0.01
          );
          mesh.geometry = subdividedGeometry;

          const material = mesh.material as THREE.MeshStandardMaterial;
          const textureLoader = new THREE.TextureLoader();
          const heightmap = textureLoader.load("/height.png");

          material.metalness = 0.5;
          material.roughness = 0.5;
          material.displacementMap = heightmap;
          material.displacementScale = 2; // Small scale for subtle displacement
          material.needsUpdate = true;
        }
      });

      model = gltf.scene;
      scene.add(model);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
  });

  // let model: THREE.Group | null = null;

  // onMount(() => {
  //   const scene = new THREE.Scene();

  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   camera.position.set(0, 0, 20);
  //   scene.add(camera);

  //   const renderer = new THREE.WebGLRenderer({ alpha: true });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   renderer.render(scene, camera);
  //   document.getElementById("bitcoin")?.appendChild(renderer.domElement);

  //   const loader = new GLTFLoader();
  //   loader.load("/piece_txt.glb", (gltf) => {
  //     gltf.scene.traverse(async (node) => {
  //       if ((node as THREE.Mesh).isMesh) {
  //         const mesh = node as THREE.Mesh;
  //         const material = mesh.material as THREE.MeshStandardMaterial;
  //         console.log(material);

  //         const textureLoader = new THREE.TextureLoader();
  //         const heightmap = textureLoader.load("/height.png");

  //         material.metalness = 0.5; // black without this line

  //         const displacementTexture = await gltf.parser.getDependency(
  //           "texture",
  //           0
  //         );

  //         if (displacementTexture) {
  //           material.displacementMap = heightmap;
  //           material.displacementScale = 2;
  //           material.displacementBias = 0;
  //           material.needsUpdate = true;
  //         }
  //       }
  //     });

  //     model = gltf.scene;
  //     scene.add(model);
  //   });

  //   const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  //   scene.add(ambientLight);

  //   const controls = new OrbitControls(camera, renderer.domElement);
  //   controls.enableDamping = true;

  //   function animate() {
  //     requestAnimationFrame(animate);
  //     // if (model) {
  //     //   model.rotation.y += 0.01;
  //     // }
  //     renderer.render(scene, camera);
  //   }

  //   window.addEventListener("resize", function () {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   });

  //   animate();
  // });
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
