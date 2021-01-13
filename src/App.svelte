<script lang="ts">
	import { onMount } from "svelte";
	import ProgressBar from "./components/ProgressBar.svelte";
	import SlideView from "./components/SlideView.svelte";
	import { page } from "./libs/page";
	import Page1 from "./pages/Page1.svelte";
	import Page10 from "./pages/Page10.svelte";
	import Page11 from "./pages/Page11.svelte";
	import Page12 from "./pages/Page12.svelte";
	import Page13 from "./pages/Page13.svelte";
	import Page14 from "./pages/Page14.svelte";
	import Page15 from "./pages/Page15.svelte";
	import Page16 from "./pages/Page16.svelte";
	import Page17 from "./pages/Page17.svelte";
	import Page18 from "./pages/Page18.svelte";
	import Page19 from "./pages/Page19.svelte";
	import Page2 from "./pages/Page2.svelte";
	import Page20 from "./pages/Page20.svelte";
	import Page3 from "./pages/Page3.svelte";
	import Page4 from "./pages/Page4.svelte";
	import Page5 from "./pages/Page5.svelte";
	import Page6 from "./pages/Page6.svelte";
	import Page7 from "./pages/Page7.svelte";
	import Page8 from "./pages/Page8.svelte";
	import Page9 from "./pages/Page9.svelte";

	const pages = [
		Page1,
		Page2,
		Page3,
		Page4,
		Page5,
		Page6,
		Page7,
		Page19,
		Page8,
		Page9,
		Page10,
		Page11,
		Page12,
		Page13,
		Page14,
		Page15,
		Page16,
		Page17,
		Page18,
		Page20,
	];

	const handleKeydown = (e: KeyboardEvent) => {
		switch (e.code) {
			case "ArrowRight":
			case "Space":
			case "Enter":
				page.next();
				break;
			case "ArrowLeft":
				page.prev();
				break;
		}
	};

	let listView = false;
	onMount(() => {
		listView = location.hash === '#list';
	});
</script>

<svelte:window on:keydown={handleKeydown} />

{#if !listView}
	<SlideView onLeftClick={page.prev} onRightClick={page.next}>
		<svelte:component this={pages[$page - 1]} />
	</SlideView>
	<ProgressBar progress={$page / pages.length} />
{:else}
	{#each pages as p}
		<SlideView onLeftClick={undefined} onRightClick={undefined}>
			<svelte:component this={p} />
		</SlideView>
	{/each}
{/if}
