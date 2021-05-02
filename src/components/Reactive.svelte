<script lang='ts'>
  let now = new Date();
  setInterval(() => now = new Date(), 1000);
  const format = Intl.DateTimeFormat('ja-JP',  { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'})
  $: dateString = format.format(now)
  $: {
    console.log(now);
  }
  
</script>

<div>{dateString}</div>
  
