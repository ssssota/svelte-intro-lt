<script>
import PaddingPane from "../components/PaddingPane.svelte";

</script>
<PaddingPane>
  <h3>まとめ</h3>
  <p>Svelteは</p>
  <ul>
    <li>(習得も実行も)早い！</li>
    <li>(学習コストが)安い！</li>
    <li>(高機能で)うまい！？</li>
  </ul>
  <p>みんなも明日からSvelte信者！</p>
</PaddingPane>

<style>
  ul {
    padding-inline-start: calc(var(--slide-width) / 15);
  }
  li {
    font-size: calc(var(--slide-width) / 20);
    font-weight: bold;
  }
</style>
