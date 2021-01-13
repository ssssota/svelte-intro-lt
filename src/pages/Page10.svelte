<script>
import PaddingPane from "../components/PaddingPane.svelte";
</script>

<PaddingPane>
  <h3>Vue.js</h3>
  <p><img src="./vue.png" alt="Vue result"></p>
</PaddingPane>

<style>
  p {
    text-align: center;
  }
  img {
    height: calc(var(--slide-height) / 1.5);
  }
</style>
