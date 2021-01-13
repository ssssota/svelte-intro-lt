<script>
import PaddingPane from "../components/PaddingPane.svelte";
</script>

<PaddingPane>
  <h3>React</h3>
  <p><img src="./react.png" alt="React result"></p>
</PaddingPane>

<style>
  p {
    text-align: center;
  }
  img {
    height: calc(var(--slide-height) / 2);
  }
</style>
