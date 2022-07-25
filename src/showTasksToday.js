import { format } from 'date-fns';
import showTasks from './showTasks';

export default function showTasksToday(tasks) {
  if (!tasks) return;

  const taskToday = document.querySelector('.task-list-today');
  const dateToday = document.querySelector('.date-today');
  const div = showTasks(tasks);
  const showDate = format(new Date(), 'E MMM dd');
  const date = format(new Date(), 'MM/dd/yyyy');

  dateToday.textContent = showDate;
  taskToday.textContent = '';

  // const storageTasks = JSON.parse(localStorage.getItem('tasks'));

  for (let i = 0; i < div.length; i += 1) {
    // if (storageTasks[i].dueDate === date) taskToday.appendChild(div[i]);
    if (tasks[i].dueDate === date) taskToday.appendChild(div[i]);
  }
}
