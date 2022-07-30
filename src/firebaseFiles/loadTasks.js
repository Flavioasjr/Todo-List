import {
  collection, getFirestore, onSnapshot, orderBy, query,
} from 'firebase/firestore';
import removeTask from '../removeTask';
import showTaskInformation from '../showTaskInformation';
import showTasksInbox from '../showTasksInbox';
import showTasksToday from '../showTasksToday';

export default function loadTasks(user = null) {
  if (!user) {
    showTasksToday();
    showTasksInbox();
    return;
  }
  const tasksQuery = query(collection(getFirestore(), user.uid), orderBy('timestamp', 'desc'));
  let tasks = [];

  onSnapshot(tasksQuery, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const task = change.doc.data();
      if (change.type === 'modified') return;
      if (change.type === 'removed') {
        const tasksFilter = tasks.filter((value) => (task.task.taskId !== value.taskId));
        tasks = [...tasksFilter];
        return;
      }
      tasks.push(task.task);
    });
    showTasksToday(tasks);
    showTasksInbox(tasks);
    showTaskInformation(tasks);
    removeTask(user);
  });
}
