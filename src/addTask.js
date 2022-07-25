import { saveTask } from '.';
import formTask from './formTask';
import Task from './task';

export default function addTask() {
  const darkBackground = document.querySelector('.dark-background');
  const formAddTask = document.querySelector('.form-add-task');
  const inputTitle = document.querySelector('#title');
  const inputDescription = document.querySelector('#description');
  const inputDate = document.querySelector('#date');
  const inputPriority = document.querySelector('#priority');
  const inputNotes = document.querySelector('#notes');

  const taskContent = formTask();

  if (!taskContent) return;
  const task = new Task(
    taskContent[0],
    taskContent[1],
    taskContent[2],
    taskContent[3],
    taskContent[4],
  );

  darkBackground.classList.remove('show');
  formAddTask.classList.remove('show');

  saveTask(task);
  console.log('add');
  inputTitle.value = '';
  inputDescription.value = '';
  inputDate.value = '';
  inputNotes.value = '';
  inputPriority.checked = false;
}
