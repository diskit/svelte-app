<script lang="ts">
  export let callback: () => void = () => {};
</script>

<style lang="scss">

@use "../styles/var";

  header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    height: 64px;
    padding: 4px 16px;
    background: #fff;
    align-items: center;
    box-shadow: 0 1px 4px #fff;

  }

  img {
    height: 32px;
  }
  
  span {
    margin-left: 8px;
    font-family: "Arial Black";
    color: var.$accent-color;
    font-size: 16px;
    line-height: 1;
    flex-grow: 1;
  }

  button {
    color: var.$accent-color;
    background-color: #fff;
    border: 2px solid var.$accent-color;
    border-radius: 16px;
    line-height: 1;
    padding: 8px 16px 8px 32px;
    font-weight: bold;
    transition: .3s;
    cursor: pointer;
    background-image: url('add_orange.svg');
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: 8px 2px;

    &:hover {
      color: #fff;
      background-color: var.$accent-color;
      border-color: var.$accent-color;
      background-image: url('add_white.svg');
    }
  }
</style>

<header>
  <img src="logo.svg" alt="logo">
  <span>My Tasks</span>
  <button on:click={callback}>タスクを追加する</button>
</header>