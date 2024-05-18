/**
 * Створи список справ.
 * На сторінці є два інпути які має вводиться назва і текст задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #task-list.
 *
 * Розмітка картки задачі
 * <li class="task-list-item">
 *     <button class="task-list-item-btn">Удалить</button>
 *     <h3>Заголовок</h3>
 *     <p>Текст</p>
 * </li>
 *
 * У кожної картки має бути кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */
import { createNewTask } from './js/createNewTask';
import { localStorageApi } from './js/localStorageApi';
import { createTaskMarkup } from './js/createTaskMarkup';
const formRef = document.querySelector('#task-form');
const listTaskRef = document.querySelector('#task-list');

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const newTask = createNewTask();
  localStorageApi.add(newTask);
  const markup = createTaskMarkup(newTask);
  listTaskRef.insertAdjacentHTML('beforeend', markup);
});

function renderCards() {
  const tasks = localStorageApi.getAll();
  const markup = tasks.map(createTaskMarkup).join('');
  listTaskRef.insertAdjacentHTML('beforeend', markup);
}
renderCards();

listTaskRef.addEventListener('click', deleteCard);
function deleteCard(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const id = event.target.dataset.id;
  localStorageApi.deleteTask(id);
}

// Видалити картку з DOM-дерева при кліку на delete
