<script lang='ts'>
  import Child from './Child.svelte';

  const callback = (v: CustomEvent) => {
    console.log(v, v.detail);
  }
</script>
  
<Child on:fire={callback}></Child>