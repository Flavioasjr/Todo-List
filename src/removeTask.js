import deleteTask from './firebaseFiles/deleteTask';

export default function removeTask(user) {
  const buttonsRemove = document.querySelectorAll('.remove-task');

  for (let i = 0; i < buttonsRemove.length; i += 1) {
    buttonsRemove[i].addEventListener('click', (e) => {
      e.preventDefault();

      let taskId = e.target.dataset.task;

      if (!taskId && taskId !== 0) {
        taskId = e.target.parentElement.parentElement.parentElement.dataset.task;
      }

      deleteTask(user, taskId);
    });
  }
}
