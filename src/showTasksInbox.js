import showTasks from './showTasks';

export default function showTasksInbox(tasks) {
  if (!tasks) return;
  const taskInbox = document.querySelector('.task-list-inbox');
  const div = showTasks(tasks);

  taskInbox.textContent = '';

  for (let i = 0; i < div.length; i += 1) {
    taskInbox.appendChild(div[i]);
  }
}
