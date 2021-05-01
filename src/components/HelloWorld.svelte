<script lang='ts'>
  import { createEventDispatcher } from "svelte";

	export let msg = '';
  let count = 0;
  const dispatch = createEventDispatcher();

  const increment = () => {
    count++;
    dispatch('incremented', { value: count });
  }
</script>
  
<style>

</style>
  
<h1>{msg}</h1>
<button on:click={increment}>count is: {count}</button>
<p>Edit ...</p>