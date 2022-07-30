export default function taskNotification(numberOfTasks) {
  const taskNotifications = document.querySelector('.task-notifications');
  if (!numberOfTasks) {
    taskNotifications.classList.add('hide');
    return;
  }
  taskNotifications.classList.remove('hide');
  taskNotifications.textContent = numberOfTasks;
}
