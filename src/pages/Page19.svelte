<script>
import PaddingPane from "../components/PaddingPane.svelte";

</script>
<PaddingPane>
  <h3>Svelteが熱い</h3>
  <p>エンジニアのフロントエンドFW満足度ランキング</p>
  <div>
    <img src="./ranking.png" alt="Satisfaction ranking">
  </div>
  <p class="link-wrapper">
    <small>
      <a href="https://2020.stateofjs.com/ja-JP/technologies/front-end-frameworks/">https://2020.stateofjs.com/ja-JP/technologies/front-end-frameworks/</a>
    </small>
  </p>
</PaddingPane>

<style>
  img {
    width: calc(var(--slide-width) / 1.2);
  }
  .link-wrapper {
    margin: 0;
    font-size: calc(var(--slide-width) / 50);
  }
</style>
