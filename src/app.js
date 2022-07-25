import './calendarStyle.css';
import './style.css';
import showFormAddTask from './showFormAddTask';
import removeTask from './removeTask';
import dashboard from './dashboard';
import showTaskInformation from './showTaskInformation';
import header from './header';
import showCalendar from './showCalendar';
import login from './firebaseFiles/login';
import logout from './firebaseFiles/logout';
import addTask from './addTask';

export default function app() {
  removeTask();
  dashboard();
  showTaskInformation();
  header();
  showCalendar();
  login();
  logout();

  const btnAddTask = document.querySelector('.btn-add-task');
  const btnFormAddTask = document.querySelector('.btn-form-add-task');

  btnFormAddTask.addEventListener('click', (e) => {
    e.preventDefault();
    showFormAddTask();
  });

  btnAddTask.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
  });
}
