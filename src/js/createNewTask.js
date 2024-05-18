import { nanoid } from 'nanoid';

export function createNewTask() {
  const newTask = { id: nanoid() };
  new FormData(event.currentTarget).forEach(
    (value, key) => (newTask[key] = value)
  );
  return newTask;
}
