<script>
	import StyledButton from "./components/StyledButton.svelte";
	let count = 0;
</script>

<div>
	<h1>Counter {count}</h1>
	<button on:click={() => count = 0}>RESET</button>
	<StyledButton on:click={() => count++}>+1</StyledButton>
	<StyledButton on:click={() => count--}>-1</StyledButton>
</div>
