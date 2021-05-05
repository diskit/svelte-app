<script lang="ts">
import { createEventDispatcher } from "svelte";

import { formatDate } from "./util";
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
  input[type="text"],
  input[type="date"] {
    height: 40px;
    padding: 4px 8px;
    font-size: 16px;
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
    background: #3a90f3;
    color: #fff;
    transition: .3s;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }

    &:disabled {
      cursor: not-allowed;
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