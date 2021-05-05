export type Task = {
  id: string,
  value: string,
  done: boolean
  deadline: Date
}

export function createTask(value: string, deadline: Date): Task {
  return {id: new Date().getTime().toString(24), value, deadline, done: false};
}
