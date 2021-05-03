<script lang="ts">
  let selected = false
  const toggle = () => selected = !selected
  const values = [1, 2, 3, 4]
</script>

{#if selected}
  <button on:click="{toggle}">selected</button>
{:else}
  <button on:click="{toggle}">select</button>
{/if}

<ul>
{#each values as value, i}
  <li>{value}, {i}</li>
{/each}
</ul>