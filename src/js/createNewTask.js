export function createNewTask() {
  const newTask = {};
  new FormData(event.currentTarget).forEach(
    (value, key) => (newTask[key] = value)
  );
  return newTask;
}
