<div>
  <slot />
</div>

<style>
  div {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media print {
    div {
      page-break-after: always;
    }
  }
</style>
