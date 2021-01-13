<div>
  <slot />
</div>

<style>
  div {
    padding: 1em 2em;
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
