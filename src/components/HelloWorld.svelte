<script lang='ts'>
	export let msg = '';
  let count = 0;
  export let callback: Function = () => {console.log('default callback')};

  const increment = () => {
    count++;
    callback();
  }
</script>
  
<style>

</style>
  
<h1>{msg}</h1>
<button on:click={increment}>count is: {count}</button>
<p>Edit ...</p>