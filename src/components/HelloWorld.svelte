<script lang='ts'>
	export let msg = '';
  let count = 0;

  const increment = () => {
    count++;
  }
</script>
  
<style>

</style>
  
<h1>{msg}</h1>
<button on:click={increment}>count is: {count}</button>
<p>Edit ...</p>