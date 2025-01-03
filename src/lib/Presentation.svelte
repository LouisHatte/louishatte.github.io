<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<div>
  <h1>{$_("name")}</h1>
  <p>{$_("desc")}</p>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    width: 700px;
    font-size: 30px;
  }
  h1,
  p {
    color: white;
  }
</style>
