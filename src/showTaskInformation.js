import { format } from 'date-fns';

export default function showTaskInformation() {
  const taskInformation = document.querySelector('.show-task-information');
  const boxTaskInformation = document.querySelector('.box-task-information');
  const tasks = document.querySelectorAll('.task');
  const darkBackground = document.querySelector('.dark-background');

  const storageTasks = JSON.parse(localStorage.getItem('tasks'));

  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.className === 'remove-task') return;

      taskInformation.textContent = '';

      let indexTask = Number(e.target.dataset.task);

      if (!indexTask && indexTask !== 0) {
        indexTask = Number(e.target.parentElement.parentElement.dataset.task);
      }

      const divPriority = document.createElement('div');
      const divDate = document.createElement('div');
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      const textArea = document.createElement('textarea');
      const buttonNote = document.createElement('button');
      const formNote = document.createElement('form');

      h3.classList.add('title-task-information');
      p.classList.add('description-task-information');
      divDate.classList.add('task-date-information');
      divPriority.classList.add('task-priority-information');
      boxTaskInformation.classList.add('show');
      darkBackground.classList.add('show');
      buttonNote.classList.add('button-note');
      textArea.classList.add('edit-notes');

      textArea.rows = '10';

      if (storageTasks[indexTask].priority) {
        h3.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" viewBox="0 0 24 24"><path d="M10 3H14V14H10V3M10 21V17H14V21H10Z" fill="#db4c3f"/></svg>';
        divPriority.classList.add('show');
      }

      h3.innerHTML += storageTasks[indexTask].title;
      p.textContent = storageTasks[indexTask].description;
      divDate.innerHTML += '<svg width="14" height="14" viewBox="0 -1 12 12" class="calendar_icon"><path fill="currentColor" fill-rule="nonzero" d="M9.5 1A1.5 1.5 0 0 1 11 2.5v7A1.5 1.5 0 0 1 9.5 11h-7A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7zm0 1h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM8 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM8.5 4a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"></path></svg>';
      divDate.innerHTML += format(new Date(storageTasks[indexTask].dueDate), 'MMM dd yy');
      divPriority.textContent = 'Is priority!';
      textArea.textContent += storageTasks[indexTask].notes;
      buttonNote.textContent += 'Add note';

      taskInformation.appendChild(h3);
      taskInformation.appendChild(p);
      taskInformation.appendChild(divDate);
      taskInformation.appendChild(divPriority);
      formNote.appendChild(textArea);
      formNote.appendChild(buttonNote);
      taskInformation.appendChild(formNote);

      buttonNote.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(storageTasks);

        storageTasks[indexTask].notes = textArea.value;

        localStorage.removeItem('tasks');
        localStorage.setItem('tasks', JSON.stringify(storageTasks));

        location.reload();
      });
    });
  }

  const closeBox = document.querySelector('.close-box');

  closeBox.addEventListener('click', (e) => {
    e.preventDefault();

    darkBackground.classList.remove('show');
    boxTaskInformation.classList.remove('show');
  });
}
