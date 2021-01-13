<script>
import CenteringPane from "../components/CenteringPane.svelte";
</script>

<CenteringPane>
  <h1 class="title">
    <img src="./svelte-logo-horizontal.svg" alt="svelte logo">を説く。
  </h1>
  <p>ssssota</p>
</CenteringPane>

<style>
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title img {
    height: 1.5em;
  }
</style>
