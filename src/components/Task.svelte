<script lang="ts">
import type { Task } from "src/task";

  export let task: Task;
</script>

<style lang="scss">
  .task {
    display: flex;
  }
</style>

<div class="task">
  <div>{task.value}</div>
  <div>{task.deadline || ''}</div>
</div>