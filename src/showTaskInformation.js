import {format} from 'date-fns';

export default function showTaskInformation() {
    const showTaskInformation = document.querySelector('.show-task-information');
    const boxTaskInformation = document.querySelector('.box-task-information');
    const tasks = document.querySelectorAll('.task');


    const storageTasks = JSON.parse(localStorage.getItem('tasks'));

    for (let task of tasks) {
        task.addEventListener('click', e => {
            e.preventDefault();
            if (e.target.className === 'remove-task') return;
            let indexTask = Number(e.target.dataset.task);

            if(!indexTask && indexTask !== 0) indexTask = Number(e.target.parentElement.parentElement.dataset.task); 

            const div = document.createElement('div');
            const subDiv = document.createElement('div');
            const divDate = document.createElement('div');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');

            h3.classList.add('title-task');
            p.classList.add('description-task');
            divDate.classList.add('task-date');
            boxTaskInformation.classList.add('show');
            
            h3.textContent = storageTasks[indexTask].title;
            p.textContent = storageTasks[indexTask].description;
            divDate.innerHTML += '<svg width="14" height="14" viewBox="0 -1 12 12" class="calendar_icon"><path fill="currentColor" fill-rule="nonzero" d="M9.5 1A1.5 1.5 0 0 1 11 2.5v7A1.5 1.5 0 0 1 9.5 11h-7A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7zm0 1h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM8 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM8.5 4a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"></path></svg>';
            divDate.innerHTML += format(new Date(storageTasks[indexTask].dueDate), 'MMM dd yy');
            subDiv.textContent += storageTasks[indexTask].notes;

            div.appendChild(h3);
            div.appendChild(p);
            div.appendChild(divDate);
            div.appendChild(subDiv);

            showTaskInformation.appendChild(div);
        });
    }
    
}