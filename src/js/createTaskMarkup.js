export function createTaskMarkup(newTask) {
  return `<li class="task-list-item">
      <button class="task-list-item-btn" data-id="${newTask.id}">Delete</button>
      <h3>${newTask.taskName}</h3>
      <p>${newTask.taskText}</p>
  </li>`;
}
