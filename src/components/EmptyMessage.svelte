<script lang="ts">
  export let show: boolean = false;
  export let callback: () => void = () => { };

  const onClickRegister = () => {
    callback();
  }

</script>

<style lang="scss">

  @use "../styles/var";
  .empty-message {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 0;
    font-size: 24px;
  }

  button {
    display: block;
    margin: auto;
    margin-top: 32px;
    border: none;
    border-radius: 2px;
    padding: 8px 32px;
    background: #fff;
    border: 2px solid var.$accent-color;
    color: var.$accent-color;
    transition: .3s;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: var.$accent-color;
      color: #fff;
    }

    &:disabled {
      cursor: not-allowed;

      &:hover {
        opacity: .6;
        background: transparent;
        color: var.$accent-color;
      }
    }
  }
</style>

{#if show}
<div class="empty-message">
  <div> タスクを登録してみよう </div>
  <button on:click={onClickRegister}>登録する</button>
</div>
{/if}