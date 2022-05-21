import showTasksToday from './showTasksToday';
import showTasksInbox from './showTasksInbox';
import removeTask from './removeTask';
import showTaskInformation from './showTaskInformation';

export default function dashboard() {
  const linkInbox = document.querySelector('.link-inbox');
  const linkToday = document.querySelector('.link-today');
  const linkUpcoming = document.querySelector('.link-upcoming');
  const inbox = document.querySelector('.inbox');
  const today = document.querySelector('.today');
  const upcoming = document.querySelector('.upcoming');
  const btnFormAddTask = document.querySelector('.btn-form-add-task');

  linkInbox.addEventListener('click', (e) => {
    e.preventDefault();
    inbox.classList.remove('hide');
    today.classList.remove('show');
    upcoming.classList.add('upcoming-hide');
    btnFormAddTask.classList.remove('hide');

    showTasksInbox();
    removeTask();
    showTaskInformation();
  });

  linkToday.addEventListener('click', (e) => {
    e.preventDefault();
    inbox.classList.add('hide');
    today.classList.add('show');
    upcoming.classList.add('upcoming-hide');
    btnFormAddTask.classList.remove('hide');

    showTasksToday();
    removeTask();
    showTaskInformation();
  });

  linkUpcoming.addEventListener('click', (e) => {
    e.preventDefault();
    inbox.classList.add('hide');
    today.classList.remove('show');
    upcoming.classList.remove('upcoming-hide');
    btnFormAddTask.classList.add('hide');

    showTasksInbox();
    removeTask();
    showTaskInformation();
  });
}
