<script lang="ts">
  import * as THREE from "three";
  import { onMount } from "svelte";
  // @ts-expect-error
  import { FlakesTexture } from "three/examples/jsm/textures/FlakesTexture";
  // @ts-expect-error
  import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
  // @ts-expect-error
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

  onMount(() => {
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("marble")?.appendChild(renderer.domElement);

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 500);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpedd = 0.75;
    controls.enableDamping = true;

    const pointLight = new THREE.PointLight(0xffffff, 3, 0, 0.005);
    pointLight.position.set(200, 200, 200);
    scene.add(pointLight);

    const envMapLoader = new THREE.PMREMGenerator(renderer);

    new RGBELoader().setPath("/").load("desert.hdr", (hdrMap: any) => {
      const envMap = envMapLoader.fromCubemap(hdrMap);

      const texture = new THREE.CanvasTexture(new FlakesTexture());
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.x = 10;
      texture.repeat.y = 6;

      const geometry = new THREE.SphereGeometry(100, 64, 64);
      const material = new THREE.MeshPhysicalMaterial({
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        metalness: 0.9,
        roughness: 0.5,
        color: 0x8418ca,
        normalMap: texture,
        normalScale: new THREE.Vector2(0.15, 0.15),
        envMap: envMap.texture,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, 0);
      scene.add(mesh);
    });

    function animate() {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

    // scene.add(camera);

    // const textureLoader = new THREE.TextureLoader();
    // const map = textureLoader.load("/wall.jpg");
    // const bumpMap = textureLoader.load("/wall-bump.jpg");
    // const displacementMap = textureLoader.load("/wall-displacement.jpg");

    // const wall = new THREE.Mesh(geometry, material);
    // scene.add(wall);
  });
</script>

<div id="marble"></div>

<style>
  #marble {
    width: 100vw;
    height: 100vh;
    margin: 0;
    background: radial-gradient(#292929, #000000);
    overflow: hidden;
  }
</style>
