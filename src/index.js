import './style.css';
import Task from './task.js';
import formTask from './formTask.js';
import saveTasks from './saveTasks.js';
import showTasks from './showTasks.js';

showTasks();

const btnAddTask = document.querySelector('.btn-add-task');

btnAddTask.addEventListener('click', e => {
    e.preventDefault();
    const taskContent = formTask();

    if(!taskContent) return;
    const task = new Task(taskContent[0], taskContent[1], taskContent[2],
        taskContent[3], taskContent[4]);

    saveTasks(task);
});