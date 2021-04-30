<script lang='ts'>
	import Header from './components/Header.svelte';
	const a = 'this string contains some <strong>HTML!!!</strong>';
	const src = 'logo.svg';
	let selected = false;
</script>
  
<style>

:global(*) {
	box-sizing: border-box;
}

:global(body) {
	margin: 0;
	font-family: Arial, Helvetica, sans-serif;
}

img {
	width: 10vw;
}

.selected {
	color: #f00;
}

</style>
  
<Header a={"ass"}></Header>
<div class="App">{@html a}</div>
<img {src} alt="logo">
<div class:selected>test</div>
<button on:click={() => selected = !selected}>click</button>