<script>
import CenteringPane from "../components/CenteringPane.svelte";
</script>

<CenteringPane>
  <h1>実はこのスライドもSvelte製</h1>
  <div>
    <img src="./qr.svg" alt="QR Code">
  </div>
</CenteringPane>

<style>
  h1 {
    margin: 0;
  }
  img {
    height: calc(var(--slide-height) / 2);
  }
</style>
