<script lang="ts">
  export let show: boolean = false;
</script>

<style lang="scss">
  div {
    padding: 16px;
    text-align: center;
    font-size: 16px;
  }
</style>

{#if show}
<div > タスクを登録してみよう </div>
{/if}