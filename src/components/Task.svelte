<script lang="ts">
import type { Task } from "src/task";
import CheckBox from "./CheckBox.svelte";
import { formatDate } from "./util";

  export let task: Task;
  const format = (d?:Date) => d && formatDate(d) || '';

</script>

<style lang="scss">
  .task {
    padding: 2px 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 2px solid transparent;
  }

  .content {
    font-size: 24px;
    flex-grow: 1;
  }

  .deadline {
    
      &:before {
      content: '~';
      margin-right: 2px;
    }
  }
</style>

<div class="task">
  <CheckBox bind:checked={task.done} />
  <div class="content">{task.value}</div>
  <div class="deadline">{format(task.deadline)}</div>
</div>