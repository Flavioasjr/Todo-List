export default function showTasks() {
    const content = document.querySelector('.content');
    let div = [];

    const storageTasks = JSON.parse(localStorage.getItem('tasks'));

    for (let i=0; i < storageTasks.length; i++) {
        div[i] = document.createElement('div');
        div[i].textContent = 'Title:' + storageTasks[i].title + ' Date:' + storageTasks[i].dueDate;
        content.appendChild(div[i]);
    }
}