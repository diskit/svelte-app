<script lang='ts'>
import TaskList from './components/TaskList.svelte';
import TaskForm from './components/TaskForm.svelte';
import Header from './components/Header.svelte';
import EmptyMessage from './components/EmptyMessage.svelte';
import Modal from './components/Modal.svelte';
import type { Task } from './task';
import { createTask } from './task';

let tasks: Task[] = [];
let form = false;

const inputComplete = (event: CustomEvent) => {
  const {task, deadline}  = event.detail;
  tasks[tasks.length] = createTask(task, new Date(deadline));
  form = false;
}

const showForm = () => {
  form = true;
}

const closeForm = () => {
  form = false;
}

</script>
  
<style lang="scss">

:global(*) {
  box-sizing: border-box;
}

:global(body) {
  margin: 0;
  font-size: 14px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main {
  width: 50vw;
  margin: auto;
  margin-top: 64px;
  padding: 40px;
}

</style>
<Header callback={showForm}></Header>
<div class="main">
  <TaskList {tasks}/>
  <EmptyMessage show={tasks.length == 0} callback={showForm}/>
</div>
<Modal visible={form} onClose={closeForm}>
  <TaskForm on:input-complete={inputComplete}/>
</Modal>