import { format } from 'date-fns';
import showTasks from './showTasks';

export default function showTasksToday() {
  const taskToday = document.querySelector('.task-list-today');
  const dateToday = document.querySelector('.date-today');
  const div = showTasks();
  const showDate = format(new Date(), 'E MMM dd');
  const date = format(new Date(), 'MM/dd/yyyy');

  dateToday.textContent = showDate;
  taskToday.textContent = '';

  const storageTasks = JSON.parse(localStorage.getItem('tasks'));

  for (let i = 0; i < div.length; i += 1) {
    if (storageTasks[i].dueDate === date) taskToday.appendChild(div[i]);
  }
}
