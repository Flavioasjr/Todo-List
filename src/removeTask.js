/* eslint-disable no-restricted-globals */
export default function removeTask() {
  const buttonsRemove = document.querySelectorAll('.remove-task');

  const storageTasks = JSON.parse(localStorage.getItem('tasks'));

  for (let i = 0; i < buttonsRemove.length; i += 1) {
    buttonsRemove[i].addEventListener('click', (e) => {
      e.preventDefault();
      const indexTask = Number(e.target.dataset.task);
      storageTasks.splice(indexTask, 1);

      localStorage.removeItem('tasks');
      localStorage.setItem('tasks', JSON.stringify(storageTasks));

      location.reload();
    });
  }
}
