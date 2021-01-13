<script>
import CenteringPane from "../components/CenteringPane.svelte";
</script>

<CenteringPane>
  <div>
    <h3>Vue.js?</h3>
    <p class="strike">クソ</p>
    <p>ViewとLogicの分離が難しい</p>
    <p>（Vue3からはマシになったけど…）</p>
  </div>
</CenteringPane>

<style>
  .strike {
    text-decoration: line-through;
  }
  h3, p {
    margin: 0;
  }
</style>
