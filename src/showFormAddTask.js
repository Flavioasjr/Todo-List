export default function showFormAddTask() {
    const formAddTask = document.querySelector('.form-add-task');
    const btnCancel = document.querySelector('.btn-cancel');
    formAddTask.classList.add('show');

    btnCancel.addEventListener('click', e => {
        e.preventDefault();

        formAddTask.classList.remove('show');
    });
}