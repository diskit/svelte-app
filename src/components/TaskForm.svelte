<script lang="ts">
import { createEventDispatcher } from "svelte";

  let task: string;
  let deadline: string;
  const dispatch = createEventDispatcher();

  const register = () => {
    if (task && deadline) {
      dispatch('input-complete', {task, deadline})
    }
  }

</script>

<style lang="scss">

@use "../styles/var";
  input[type="text"],
  input[type="date"] {
    height: 40px;
    padding: 4px 8px;
    font-size: 16px;
    border: 1px solid #333;
  }

  .form-group {
    display: flex;
    flex-direction: column;;
    margin-bottom: 16px;

    label {
      width: 80px;
      line-height: 1;
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
    }

    input[type="text"] {
      width: 100%;
    }
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

<div class="task-form">
  <div class="form-group">
    <label for="task">なにを?</label>
    <input id="task" type="text" bind:value={task}>
  </div>
  <div class="form-group">
    <label for="deadline">いつまでに?</label>
    <input id="deadline" type="date" bind:value={deadline} >
  </div>
  <div>
    <button disabled={!task || !deadline} on:click="{register}">登録</button>
  </div>
</div>