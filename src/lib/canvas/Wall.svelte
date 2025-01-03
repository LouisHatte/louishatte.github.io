<script lang="ts">
  import * as THREE from "three";
  import { onMount } from "svelte";
  // @ts-expect-error
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      5000
    );
    camera.position.set(0, 0, 500);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("wall")?.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const textureLoader = new THREE.TextureLoader();
    const map = textureLoader.load("/wall.jpg");
    const bumpMap = textureLoader.load("/wall-bump.jpg");
    const displacementMap = textureLoader.load("/wall-displacement.jpg");

    const material = new THREE.MeshPhongMaterial({
      map,
      bumpMap,
      bumpScale: 1.3,
      displacementMap,
      displacementScale: 15,
    });

    const geometry = new THREE.PlaneGeometry(400, 450, 50, 50);
    const wall = new THREE.Mesh(geometry, material);
    scene.add(wall);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    function render() {
      renderer.render(scene, camera);
      controls.update();
      requestAnimationFrame(render);
    }
    render();
  });
</script>

<div id="wall"></div>

<style>
  #wall {
    width: 100vw !important;
    height: 100vh !important;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
