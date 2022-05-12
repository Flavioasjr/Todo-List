import {format} from 'date-fns';

export default function showTasks() {
    const taskToday = document.querySelector('.task-list-today');
    const dateToday = document.querySelector('.date-today');
    let div = [];
    let subDiv = [];
    let h3 = [];
    let p = [];
    let button = [];
    let showDate = format(new Date(), 'E MMM dd');
    let date = format(new Date(), 'MM/dd/yyyy');
    let tasksToday = [];

    dateToday.textContent = showDate;
    taskToday.textContent = '';
    

    const storageTasks = JSON.parse(localStorage.getItem('tasks'));

    for (let task of storageTasks) {
        if(task.dueDate === date) tasksToday.push(task);
    }

    for (let i=0; i < tasksToday.length; i++) {
        div[i] = document.createElement('div');
        subDiv[i] = document.createElement('div');
        h3[i] = document.createElement('h3');
        p[i] = document.createElement('p');
        button[i] = document.createElement('button');

        div[i].classList.add('task-today');
        subDiv[i].classList.add('task-information');
        h3[i].classList.add('title-task');
        p[i].classList.add('description-task');
        button[i].classList.add('remove-task');

        h3[i].textContent = tasksToday[i].title;
        p[i].textContent = tasksToday[i].description;
        button[i].textContent = 'Remove';
        button[i].dataset.task = i;

        subDiv[i].appendChild(h3[i]);
        subDiv[i].appendChild(p[i]);
        div[i].appendChild(subDiv[i]);
        div[i].appendChild(button[i]);
        taskToday.appendChild(div[i]);
    }
}