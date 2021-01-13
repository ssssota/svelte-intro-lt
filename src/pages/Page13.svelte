<script>
import PaddingPane from "../components/PaddingPane.svelte";

</script>
<PaddingPane>
  <h3>早い</h3>
  <p class="image-wrapper">
    <img src="performance1.png" alt="Performance1">
    <img src="performance2.png" alt="Performance2">
    <img src="performance3.png" alt="Performance3">
  </p>
  <p class="link-wrapper">
    <small>
      <a href="https://krausest.github.io/js-framework-benchmark/current.html">https://krausest.github.io/js-framework-benchmark/current.html</a>
    </small>
  </p>
</PaddingPane>

<style>
  .image-wrapper {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0;
  }
  img {
    max-height: calc(var(--slide-height) / 1.5);
    width: calc(var(--slide-width) / 4);
  }
  .link-wrapper {
    margin: 0;
    font-size: calc(var(--slide-width) / 50);
  }
</style>
