<script>
import PaddingPane from "../components/PaddingPane.svelte";

</script>
<PaddingPane>
  <h3>あれもこれも標準搭載</h3>
  <ul>
    <li>
      <p>ストア</p>
      <ul>
        <li>Flux...？知らない子ですね</li>
        <li>ReduxやVuexとはおさらば！</li>
      </ul>
    </li>
    <li>
      <p>Scoped CSS</p>
    </li>
    <li>
      <p>非同期処理</p>
      <ul>
        <li>{'{'}#await promise{'}'}でいい感じにかける</li>
      </ul>
    </li>
    <li>
      <p>アニメーション機能</p>
      <ul>
        <li>さっきのページのアニメーションもSvelteの機能</li>
      </ul>
    </li>
  </ul>
</PaddingPane>

<style>
  li>p {
    margin: 0;
  }
</style>
