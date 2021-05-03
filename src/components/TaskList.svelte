<script lang="ts">
import type { Task } from "src/task";
import TaskComponent from './Task.svelte';

  export let tasks: Task[] = [];

</script>

{#each tasks as task} 
  <TaskComponent {task}></TaskComponent>
{/each}