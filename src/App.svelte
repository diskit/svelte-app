<script lang='ts'>
import TaskList from './components/TaskList.svelte';
import TaskForm from './components/TaskForm.svelte';
import Header from './components/Header.svelte';
import type { Task } from './task';

let tasks: Task[] = [
  {id: '111', value: 'svelte'}
];

</script>
  
<style lang="scss">

:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main {
  width: 50vw;
  margin: auto;
}

</style>
<Header></Header>
<div class="main">
  <TaskList {tasks}/>
  <TaskForm />
</div>

