import {
  doc, deleteDoc, query, collection, getFirestore, orderBy, getDocs,
} from 'firebase/firestore';

export default async function deleteTask(user, taskId) {
  const tasksQuery = query(collection(getFirestore(), user.uid), orderBy('timestamp', 'desc'));
  const tasks = await getDocs(tasksQuery);
  let documentIdToBeRemoved = '';

  tasks.forEach((task) => {
    if (taskId === task.data().task.taskId) {
      documentIdToBeRemoved = task.id;
    }
  });

  await deleteDoc(doc(getFirestore(), user.uid, documentIdToBeRemoved));
}
