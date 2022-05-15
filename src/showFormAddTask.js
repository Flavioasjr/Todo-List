export default function showFormAddTask() {
  const formAddTask = document.querySelector('.form-add-task');
  const btnCancel = document.querySelector('.btn-cancel');
  const darkBackground = document.querySelector('.dark-background');

  formAddTask.classList.add('show');
  darkBackground.classList.add('show');

  btnCancel.addEventListener('click', (e) => {
    e.preventDefault();

    darkBackground.classList.remove('show');
    formAddTask.classList.remove('show');
  });
}
