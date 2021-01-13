<script>
import PaddingPane from "../components/PaddingPane.svelte";
</script>

<PaddingPane>
  <h3>わかりやすい？</h3>
  <p>こんなやつを作ってみた</p>
  <p class="image-wrapper"><img src="./example.png" alt="example"></p>
</PaddingPane>

<style>
  .image-wrapper {
    text-align: center;
  }
  img {
    border: 2px solid #999;
    height: calc(var(--slide-height) / 3);
  }
</style>
