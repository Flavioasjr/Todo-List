export default function dashboard() {
  const linkInbox = document.querySelector('.link-inbox');
  const linkToday = document.querySelector('.link-today');
  const inbox = document.querySelector('.inbox');
  const today = document.querySelector('.today');
  const btnFormAddTask = document.querySelector('.btn-form-add-task');

  linkInbox.addEventListener('click', (e) => {
    e.preventDefault();
    inbox.classList.remove('hide');
    today.classList.remove('show');
    btnFormAddTask.classList.remove('hide');
  });

  linkToday.addEventListener('click', (e) => {
    e.preventDefault();
    inbox.classList.add('hide');
    today.classList.add('show');
    btnFormAddTask.classList.remove('hide');
  });
}
