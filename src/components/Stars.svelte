<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import gsap from "gsap";

  import { BASE_URL } from "@/constants";
  import { theme } from "@/lib/styles/colors";
  import {
    view,
    isViewTransitioning,
    TRANSITION_VIEW_DURATION,
  } from "@/stores/view";
  import { ThreeHelper } from "@/utils/threeJS";

  const modelPaths = [`${BASE_URL}ethereum.fbx`];

  const cameraRadius = 1.7;
  const verticalAmplitude = 0.9;
  const horizontalWobble = 0.9;

  let divRef: HTMLDivElement;
  const starMaterial = new THREE.MeshBasicMaterial({ color: $theme["color2"] });

  $effect(() => {
    const color = $theme["color2"];
    starMaterial.color.set(color);
    ambientLight?.color.set(color);
    frontLight?.color.set(color);
    backLight?.color.set(color);
    topLight?.color.set(color);
  });

  let scene: THREE.Scene;
  let renderer: THREE.WebGLRenderer;

  let camera: THREE.PerspectiveCamera;
  let cameraAngle = 0;

  let models: THREE.Group[] = [];
  let coin: THREE.Group;
  const starGroup = new THREE.Group();

  let ambientLight: THREE.AmbientLight;
  let frontLight: THREE.SpotLight;
  let backLight: THREE.SpotLight;
  let topLight: THREE.SpotLight;

  let requestId: number;

  $effect(() => {
    $view;
    if (!camera) return;

    gsap.to(camera.position, {
      x: $view.position[0],
      y: $view.position[1],
      z: $view.position[2],
      duration: TRANSITION_VIEW_DURATION / 1000,
      onUpdate: () => camera.lookAt(0, 0, 0),
      onComplete: () => {
        if ($view.id === 0) {
          cameraAngle = Math.atan2(camera.position.x, camera.position.z);
        }
      },
    });
  });

  async function initScene() {
    ({ scene, camera, renderer, models } = await ThreeHelper.create3DScene({
      width: divRef.clientWidth,
      height: divRef.clientHeight,
      modelPaths,
      texturePaths: [],
      alpha: false,
    }));

    coin = models[0];
    coin.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const existingTexture = child.material.map;
        if (existingTexture) {
          child.material.color = new THREE.Color(0x3c3c3d);
        }
      }
    });
    coin.position.set(0, -0.75, 0);
    scene.add(coin);

    const starGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    for (let i = 0; i < 1000; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial);
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      star.position.set(x, y, z);
      starGroup.add(star);
    }
    scene.add(starGroup);

    const lightColor = $theme["color2"];

    ambientLight = new THREE.AmbientLight(lightColor, 1);

    frontLight = new THREE.SpotLight(lightColor, 5, 8);
    frontLight.position.set(0.5, 0.5, 1.2);
    frontLight.target.position.set(-0.5, -0.5, -1.2);

    backLight = new THREE.SpotLight(lightColor, 5, 8);
    backLight.position.set(-0.5, -0.5, -1.2);
    backLight.target.position.set(0.5, 0.5, 1.2);

    topLight = new THREE.SpotLight(lightColor, 10, 8);
    topLight.position.set(0, 1, 0);
    topLight.target.position.set(0, -1, 0.1);

    scene.add(ambientLight, frontLight, backLight, topLight);

    camera.position.set(...$view.position);
    camera.lookAt(0, 0, 0);
    divRef.appendChild(renderer.domElement);

    animate();
  }

  function animate() {
    requestId = requestAnimationFrame(animate);

    if ($view.id === 0 && !$isViewTransitioning) {
      cameraAngle += 0.002;
      camera.position.x =
        Math.sin(cameraAngle) * cameraRadius +
        Math.sin(cameraAngle * 3.5) * horizontalWobble;
      camera.position.z = Math.cos(cameraAngle) * cameraRadius;
      camera.position.y = Math.sin(cameraAngle * 2.0) * verticalAmplitude;
      camera.lookAt(0, 0, 0);
    }

    coin.rotation.y += 0.008;

    starGroup.rotation.y += 0.0001;
    starGroup.rotation.x += 0.001;

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
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: var(--z-last);
  }
</style>
