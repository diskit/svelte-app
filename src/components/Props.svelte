<script lang='ts'>
  let count = 0;
  export let message = '';
  export let callback = () => {
    console.log('default callback');
  }

  const increment = () => {
    count++;
    callback();
  }
</script>
  
<h1>Props</h1>
<p>{message}</p>
<button on:click={increment}>count is: {count}</button>