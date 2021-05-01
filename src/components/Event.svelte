<script lang='ts'>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const onClick = () => {
    dispatch('fire', { message: 'clicked' });
  }
</script>
  
<button on:click={onClick}>Click Me</button>