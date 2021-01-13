<script>
import PaddingPane from "../components/PaddingPane.svelte";

</script>
<PaddingPane>
  <h3>おわりに</h3>
  <ol>
    <li>
      <p>採用活動</p>
      <p>nanoFreaksは<span class="strike">僕みたいな</span>強いエンジニアを募集しています。</p>
    </li>
    <li>
      <p>就職活動</p>
      <p>僕は技術で面白いことができる会社を探しています。</p>
    </li>
  </ol>
  <h1>興味がある方は@ssssotaroへ！</h1>
</PaddingPane>

<style>
  .strike {
    text-decoration: line-through;
  }
  li>p {
    margin: 0;
  }
</style>
