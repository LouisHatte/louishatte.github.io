<script lang="ts">
  import nltkPng from "@/assets/images/languages/nltk.png";
  import pygamePng from "@/assets/images/languages/pygame.png";
  import pythonPng from "@/assets/images/languages/python.png";
  import sklearnPng from "@/assets/images/languages/sklearn.png";
  import tensorflowPng from "@/assets/images/languages/tensorflow.png";

  import Orbit from "@/components/body/view-2/Orbit.svelte";
</script>

<div class="orbits">
  <Orbit
    radius={140}
    orbitingItems={[
      // { position: 0, imageUrl: nltkPng },
      // { position: 90, imageUrl: pygamePng },
      // { position: 180, imageUrl: pythonPng },
      { position: 0, imageUrl: tensorflowPng },
    ]}
  >
    <img src={pythonPng} width={50} height={50} alt="I" />
  </Orbit>
  <!-- <Orbit
    radius={140}
    orbitingItems={[
      // { position: 0, imageUrl: nltkPng },
      // { position: 90, imageUrl: pygamePng },
      // { position: 180, imageUrl: pythonPng },
      { position: 0, imageUrl: tensorflowPng },
    ]}
  >
    <img src={pythonPng} width={50} height={50} alt="I" />
  </Orbit> -->
</div>

<style lang="scss">
  .orbits {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    // border: solid 3px orange;
  }
</style>
