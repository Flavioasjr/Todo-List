import { isUserSignedIn } from '.';

export default function showFormAddTask() {
  const formAddTask = document.querySelector('.form-add-task');
  const btnCancel = document.querySelector('.btn-cancel');
  const darkBackground = document.querySelector('.dark-background');
  const listForm = document.querySelector('.list-form');
  const btnAddTask = document.querySelector('.btn-add-task');

  const isUserLoggedIn = isUserSignedIn();
  const div = document.createElement('div');
  const errorMessage = document.querySelector('.error-message-saving-task');

  div.classList.add('error-message-saving-task');

  if (!isUserLoggedIn) {
    div.textContent = 'User must be logged in to save task';
    formAddTask.insertBefore(div, listForm);
    btnAddTask.disabled = true;
  } else {
    if (errorMessage) {
      errorMessage.remove();
    }
    btnAddTask.disabled = false;
    div.textContent = '';
  }

  formAddTask.classList.add('show');
  darkBackground.classList.add('show');

  btnCancel.addEventListener('click', (e) => {
    e.preventDefault();

    darkBackground.classList.remove('show');
    formAddTask.classList.remove('show');
  });
}
