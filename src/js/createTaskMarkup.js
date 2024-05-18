export function createTaskMarkup(newTask) {
  return `<li class="task-list-item">
      <button class="task-list-item-btn">Удалить</button>
      <h3>${newTask.taskName}</h3>
      <p>${newTask.taskText}</p>
  </li>`;
}