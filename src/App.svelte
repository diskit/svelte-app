<script lang='ts'>
	import HelloWorld from './components/HelloWorld.svelte';
	const src = 'logo.svg';
</script>
  
<style>

:global(body) {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

</style>

<img {src} alt="logo">
<HelloWorld msg="Hello Svelte"></HelloWorld>
