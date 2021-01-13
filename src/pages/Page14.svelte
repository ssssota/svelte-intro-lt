<script>
import PaddingPane from "../components/PaddingPane.svelte";

</script>
<PaddingPane>
  <h3>小さい</h3>
  <p>さっきのカウンターで生成されたJS/CSSのサイズを比較</p>
  <ol>
    <li>Svelte 67.9kB</li>
    <li>React 476kB</li>
    <li>Vue.js 564kB</li>
  </ol>
  <p>規模が小さいので参考程度</p>
</PaddingPane>

<style>
  ol {
    padding-inline-start: calc(var(--slide-width) / 10);
  }
  li {
    font-size: calc(var(--slide-height) / 10);
  }
  li:first-child {
    font-weight: bold;
  }
</style>
