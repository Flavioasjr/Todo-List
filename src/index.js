import './style.css';
import Task from './task.js';
import formTask from './formTask.js';
import saveTasks from './saveTasks.js';
import showTasks from './showTasks.js';
import showFormAddTask from './showFormAddTask';
import removeTask from './removeTask';

showTasks();
removeTask();

const btnAddTask = document.querySelector('.btn-add-task');
const btnFormAddTask = document.querySelector('.btn-form-add-task');

btnFormAddTask.addEventListener('click', e => {
    e.preventDefault();

    showFormAddTask();
});

btnAddTask.addEventListener('click', e => {
    e.preventDefault();
    const taskContent = formTask();

    if(!taskContent) return;
    const task = new Task(taskContent[0], taskContent[1], taskContent[2],
        taskContent[3], taskContent[4]);

    saveTasks(task);

    location.reload();
});