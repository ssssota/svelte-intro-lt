import { writable } from "svelte/store";

export const getCurrentHashNum = () => Number(location.hash.substring(1)) || 1;
const defaultPage = getCurrentHashNum();

export const updateUrl = (pageNum: number) => {
  const url = new URL(location.href);
  url.hash = `#${pageNum}`;
  history.pushState(null, `Page ${pageNum}`, url.href);
};

const createPageCounter = () => {
  const { subscribe, update, set } = writable(defaultPage);

  const next = () => update(pageNum => {
    const nextPage = pageNum + 1;
    updateUrl(nextPage);
    return nextPage;
  });
  const prev = () => update(pageNum => {
    const prevPage = Math.max(1, pageNum - 1);
    if (prevPage !== pageNum) updateUrl(prevPage);
    return prevPage;
  });

  return {
    subscribe,
    set,
    next,
    prev,
  };
};

export const page = createPageCounter();

window.addEventListener('hashchange', () => page.set(getCurrentHashNum()));
window.addEventListener('popstate', () => page.set(getCurrentHashNum()));
