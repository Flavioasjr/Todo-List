import { format, compareAsc } from 'date-fns';

export default function showTasks() {
  const div = [];
  const subDiv = [];
  const h3 = [];
  const p = [];
  const divDate = [];
  const button = [];
  const date = format(new Date(), 'MM dd yy');

  const storageTasks = JSON.parse(localStorage.getItem('tasks'));

  for (let i = 0; i < storageTasks.length; i += 1) {
    div[i] = document.createElement('div');
    subDiv[i] = document.createElement('div');
    divDate[i] = document.createElement('div');
    h3[i] = document.createElement('h3');
    p[i] = document.createElement('p');
    button[i] = document.createElement('button');

    div[i].classList.add('task');
    subDiv[i].classList.add('task-information');
    h3[i].classList.add('title-task');
    p[i].classList.add('description-task');
    divDate[i].classList.add('task-date');
    button[i].classList.add('remove-task');

    const dateTask = format(new Date(storageTasks[i].dueDate), 'MM dd yy');
    const compareDates = compareAsc(new Date(dateTask), new Date(date));

    if (compareDates === -1) {
      divDate[i].classList.add('late-task');
    }

    if (compareDates === 0) {
      divDate[i].classList.add('current-task');
    }

    if (storageTasks[i].priority) {
      h3[i].innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="16" height="16" viewBox="0 2 20 20"><path d="M10 3H14V14H10V3M10 21V17H14V21H10Z" fill="#db4c3f"/></svg>';
    }

    div[i].href = '#';
    h3[i].innerHTML += storageTasks[i].title;
    p[i].textContent = storageTasks[i].description;
    divDate[i].innerHTML += '<svg width="14" height="14" viewBox="0 -1 12 12" class="calendar_icon"><path fill="currentColor" fill-rule="nonzero" d="M9.5 1A1.5 1.5 0 0 1 11 2.5v7A1.5 1.5 0 0 1 9.5 11h-7A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7zm0 1h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM8 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM8.5 4a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"></path></svg>';
    divDate[i].innerHTML += format(new Date(storageTasks[i].dueDate), 'MMM dd yy');
    button[i].innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -3 24 24" width="24" height="24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><rect width="14" height="1" x="5" y="6" fill="currentColor" rx=".5"></rect><path fill="currentColor" d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"></path><path stroke="currentColor" d="M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z"></path></g></svg>';
    button[i].dataset.task = i;
    div[i].dataset.task = i;

    subDiv[i].appendChild(h3[i]);
    subDiv[i].appendChild(p[i]);
    subDiv[i].appendChild(divDate[i]);
    div[i].appendChild(subDiv[i]);
    div[i].appendChild(button[i]);
  }
  return div;
}
