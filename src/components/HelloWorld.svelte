<script lang='ts'>
	export let msg = '';
  let count = 0;
</script>
  
<style>

</style>
  
<h1>{msg}</h1>
<button on:click={() => count++}>count is: {count}</button>
<p>Edit ...</p>