export default function removeTask() {
    const buttonsRemove = document.querySelectorAll('.remove-task');

    const storageTasks = JSON.parse(localStorage.getItem('tasks'));
    
    for(let button of buttonsRemove) {
        button.addEventListener('click', e => {
            e.preventDefault();
            const indexTask = Number(e.target.dataset.task);
            console.log(e);
            // storageTasks.splice(indexTask, 1);
            
            // localStorage.removeItem('tasks');
            // localStorage.setItem('tasks', JSON.stringify(storageTasks));

            // location.reload();
        });
    }
}