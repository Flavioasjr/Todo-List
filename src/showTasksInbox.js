import showTasks from './showTasks';

export default function showTasksInbox() {
  const taskInbox = document.querySelector('.task-list-inbox');
  const div = showTasks();

  taskInbox.textContent = '';

  for (let i = 0; i < div.length; i += 1) {
    taskInbox.appendChild(div[i]);
  }
}
