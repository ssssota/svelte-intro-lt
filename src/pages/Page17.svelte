<script>
import PaddingPane from "../components/PaddingPane.svelte";
</script>

<PaddingPane>
  <h3>実はこのスライドもSvelte製</h3>
  <p>GitHubでソースコード、<br>GitHub Pagesでスライド公開してます</p>
  <p>どんな感じで書けるか詳しく見たい人はここから👇</p>
  <p>構成としてはSvelte+TypeScript</p>
  <p class="gh-link"><a href="https://github.com/ssssota/svelte-intro-lt">https://github.com/ssssota/svelte-intro-lt</a></p>
  <img class="rightbottom" src="./qr.svg" alt="QR Code">
</PaddingPane>

<style>
  img {
    margin: calc(var(--slide-height) / 10);
    height: calc(var(--slide-height) / 2.5);
  }
  .rightbottom {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .gh-link {
    position: absolute;
    bottom: 0;
    margin: calc(var(--slide-height) / 10) 0;
    font-size: calc(var(--slide-height) / 30);
  }
</style>
