import showFormAddTask from './showFormAddTask';

export default function header() {
  const btnHome = document.querySelector('.btn-home');
  const btnShowMenu = document.querySelector('.btn-show-menu');
  const btnHeaderAddTask = document.querySelector('.btn-header-add-task');
  const btnNotifications = document.querySelector('.btn-notifications');

  btnHome.addEventListener('click', () => {
    location.reload();
  });

  btnShowMenu.addEventListener('click', (e) => {
    e.preventDefault();

    const dashboard = document.querySelector('.dashboard');
    const container = document.querySelector('.container');

    for (let i = 0; i < dashboard.classList.length; i += 1) {
      if (dashboard.classList[i] === 'hide') {
        dashboard.classList.remove('hide');
        container.classList.remove('container-hide-dashboard');
        return;
      }
    }

    dashboard.classList.add('hide');
    container.classList.add('container-hide-dashboard');
  });

  btnHeaderAddTask.addEventListener('click', (e) => {
    e.preventDefault();

    showFormAddTask();
  });

  btnNotifications.addEventListener('click', (e) => {
    e.preventDefault();
    const btnFormAddTask = document.querySelector('.btn-form-add-task');
    const inbox = document.querySelector('.inbox');
    const today = document.querySelector('.today');

    inbox.classList.add('hide');
    today.classList.add('show');
    btnFormAddTask.classList.remove('hide');
  });
}
