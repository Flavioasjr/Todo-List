import {
  collection, getFirestore, onSnapshot, orderBy, query,
} from 'firebase/firestore';
import showTasksInbox from '../showTasksInbox';
import showTasksToday from '../showTasksToday';

export default function loadTasks(user) {
  console.log(user);
  const tasksQuery = query(collection(getFirestore(), user.uid), orderBy('timestamp', 'desc'));
  const tasks = [];

  onSnapshot(tasksQuery, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const task = change.doc.data();
      if (change.type === 'modified') return;
      tasks.push(task.task);
    });
    console.log(tasks);
    showTasksToday(tasks);
    showTasksInbox(tasks);
  });
}
