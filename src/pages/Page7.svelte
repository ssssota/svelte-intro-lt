<script>
import CenteringPane from "../components/CenteringPane.svelte";
</script>

<CenteringPane>
  <img src="svelte-logo-horizontal.svg" alt="svelte logo">
</CenteringPane>

<style>
  img {
    height: calc(var(--slide-width) / 7.5);
  }
</style>
