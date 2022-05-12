import {format} from 'date-fns';

export default function showTasksInbox() {
    const taskInbox = document.querySelector('.task-list-inbox');
    let div = [];
    let subDiv = [];
    let h3 = [];
    let p = [];
    let divDate = [];
    let button = [];   

    taskInbox.textContent = '';

    const storageTasks = JSON.parse(localStorage.getItem('tasks'));

    for (let i=0; i < storageTasks.length; i++) {
        div[i] = document.createElement('div');
        subDiv[i] = document.createElement('div');
        divDate[i] = document.createElement('div');
        h3[i] = document.createElement('h3');
        p[i] = document.createElement('p');
        button[i] = document.createElement('button');

        div[i].classList.add('task-today');
        subDiv[i].classList.add('task-information');
        h3[i].classList.add('title-task');
        p[i].classList.add('description-task');
        divDate[i].classList.add('task-date');
        button[i].classList.add('remove-task');

        h3[i].textContent = storageTasks[i].title;
        p[i].textContent = storageTasks[i].description;
        divDate[i].innerHTML += '<svg width="14" height="14" viewBox="0 -1 12 12" class="calendar_icon"><path fill="currentColor" fill-rule="nonzero" d="M9.5 1A1.5 1.5 0 0 1 11 2.5v7A1.5 1.5 0 0 1 9.5 11h-7A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7zm0 1h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM8 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM8.5 4a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"></path></svg>';
        divDate[i].innerHTML += format(new Date(storageTasks[i].dueDate), 'MMM dd yy');
        button[i].textContent = 'Remove';
        button[i].dataset.task = i;

        subDiv[i].appendChild(h3[i]);
        subDiv[i].appendChild(p[i]);
        subDiv[i].appendChild(divDate[i]);
        div[i].appendChild(subDiv[i]);
        div[i].appendChild(button[i]);
        taskInbox.appendChild(div[i]);
    }
}