<div>
  <slot />
</div>

<style>
  div {
    --vertical-padding: calc(var(--slide-height) / 25);
    --horizontal-padding: calc(var(--slide-width) / 15);
    padding:  var(--vertical-padding) var(--horizontal-padding);
    height: calc(100% - calc(var(--vertical-padding) * 2));
    position: relative;
  }
  @media print {
    @page {
      size: 1280px 960px;
      margin: 0;
    }
    div {
      page-break-after: always;
    }
  }
</style>
