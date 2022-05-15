let tasks = [];

export default function saveTasks(task) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
