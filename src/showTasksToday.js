import { format } from 'date-fns';
import showTasks from './showTasks';

export default function showTasksToday(tasks) {
  const taskToday = document.querySelector('.task-list-today');
  const dateToday = document.querySelector('.date-today');
  const div = showTasks(tasks);
  const showDate = format(new Date(), 'E MMM dd');
  const date = format(new Date(), 'MM/dd/yyyy');

  dateToday.textContent = showDate;
  taskToday.textContent = '';

  if (!tasks) return;

  for (let i = 0; i < div.length; i += 1) {
    if (tasks[i].dueDate === date) taskToday.appendChild(div[i]);
  }
}
