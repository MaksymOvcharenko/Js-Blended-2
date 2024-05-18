function add(newTask) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
export const localStorageApi = { add };
