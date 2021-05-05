<script lang="ts">
  export let checked = false;

  const id = Math.random().toString(24).substr(-12);
</script>

<style lang="scss">
  input[type="checkbox"] {
    display: none;
  }

  label {
    display: block;
    width: 24px;
    height: 24px;
    background-image: url('/check_box_outline.svg');
    background-size: contain;
    cursor: pointer;
  }

  input:checked + label {
    background-image: url('/check_box.svg');
  }
</style>


<input {id} type="checkbox" bind:checked={checked}>
<label for={id}></label>


