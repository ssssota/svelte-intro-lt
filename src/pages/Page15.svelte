<script>
import { blur } from "svelte/transition";
import PaddingPane from "../components/PaddingPane.svelte";
</script>

<PaddingPane>
  <h3>なんで小さいし早いの？</h3>
  <p>それはね…</p>
  <h1 class="result" in:blur={{ delay: 1000, duration: 300 }}>事前にコンパイルして</h1>
  <h1 class="result" in:blur={{ delay: 2000, duration: 300 }}>ランタイムを含まないから</h1>
</PaddingPane>

<style>
  .result {
    text-align: center;
    font-size: calc(var(--slide-height) / 12);
  }
</style>
