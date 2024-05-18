const LOCAL_STORAGE_KEY = 'tasks';
function add(newTask) {
  const tasks = getAll();
  tasks.push(newTask);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}

function getAll() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}
function deleteTask(id) {
  const task = getAll();
  const dayTask = task.filter(item => item.id !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dayTask));
}

export const localStorageApi = { add, getAll, deleteTask };
