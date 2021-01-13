<script lang="ts">
  import { page } from "../libs/page";

  export let onLeftClick: svelte.JSX.EventHandler<MouseEvent, HTMLDivElement> | undefined;
  export let onRightClick: svelte.JSX.EventHandler<MouseEvent, HTMLDivElement> | undefined;
  export let pageCount: boolean | undefined = undefined;
</script>

<div class="wrapper">
  <section class="slide">
    <slot />
  </section>
  <div class:cursor={onLeftClick != null} class="left" on:click={onLeftClick} />
  <div class:cursor={onRightClick != null} class="right" on:click={onRightClick} />
  {#if !!pageCount}
    <div class="page-count">{$page}</div>
  {/if}
</div>

<style>
  .wrapper {
    background-color: black;
    width: 100%;
    height: 100%;

    padding: 0;
    margin: 0;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left {
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .left.cursor {
    cursor: url(../left.svg) 0 0, pointer;
  }
  .right {
    position: absolute;
    width: 50%;
    height: 100%;
    right: 0;
    top: 0;
  }
  .right.cursor {
    cursor: url(../right.svg) 0 0, pointer;
  }
  .page-count {
    --size: 1.5em;
    position: fixed;
    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 calc(var(--size) / 2) 0 rgba(0, 0, 0, 0.5);

    bottom: calc(var(--size) / 2);
    right: calc(var(--size) / 2);
  }

  .slide {
    background-color: white;

    --slide-width: min(100vw, calc(400vh / 3));
    --slide-height: min(75vw, 100vh);

    width: var(--slide-width);
    height: var(--slide-height);
  }
  .slide :global(h1) {
    font-size: calc(var(--slide-width) / 20);
  }
  .slide :global(h2) {
    font-size: calc(var(--slide-width) / 24);
  }
  .slide :global(h3) {
    font-size: calc(var(--slide-width) / 28);
  }
  .slide :global(h4, h5, h6, p, li) {
    font-size: calc(var(--slide-width) / 32);
  }
</style>
