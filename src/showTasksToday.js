import {format} from 'date-fns';

export default function showTasks() {
    const taskToday = document.querySelector('.task-list-today');
    const dateToday = document.querySelector('.date-today');
    let a= [];
    let subDiv = [];
    let h3 = [];
    let p = [];
    let button = [];
    let showDate = format(new Date(), 'E MMM dd');
    let date = format(new Date(), 'MM/dd/yyyy');

    dateToday.textContent = showDate;
    taskToday.textContent = '';
    
    const storageTasks = JSON.parse(localStorage.getItem('tasks'));

    for (let i=0; i < storageTasks.length; i++) {
        a[i] = document.createElement('a');
        subDiv[i] = document.createElement('div');
        h3[i] = document.createElement('h3');
        p[i] = document.createElement('p');
        button[i] = document.createElement('button');

        a[i].classList.add('task');
        subDiv[i].classList.add('task-information');
        h3[i].classList.add('title-task');
        p[i].classList.add('description-task');
        button[i].classList.add('remove-task');

        h3[i].textContent = storageTasks[i].title;
        p[i].textContent = storageTasks[i].description;
        button[i].textContent = 'Remove';
        button[i].dataset.task = i;

        subDiv[i].appendChild(h3[i]);
        subDiv[i].appendChild(p[i]);
        a[i].appendChild(subDiv[i]);
        a[i].appendChild(button[i]);

        if(storageTasks[i].dueDate === date) taskToday.appendChild(a[i]);
    }
}