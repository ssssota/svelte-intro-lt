<script>
import PaddingPane from "../components/PaddingPane.svelte";
</script>

<PaddingPane>
  <h3>Svelte</h3>
  <p><img src="./svelte.png" alt="Svelte result"></p>
</PaddingPane>

<style>
  p {
    text-align: center;
  }
  img {
    height: calc(var(--slide-height) / 2.5);
  }
</style>
