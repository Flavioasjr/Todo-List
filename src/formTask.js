import { format, add } from 'date-fns';


export default function formTask() {
    const inputTitle = document.querySelector('#title');
    const inputDescription = document.querySelector('#description');
    const inputDate = document.querySelector('#date');
    const inputPriority = document.querySelector('#priority');
    const inputNotes = document.querySelector('#notes');

    let taskContent = [];

    if (!inputTitle.value || !inputDate.value) return false;

    const date = add(new Date(inputDate.value), {
        years: 0,
        months: 0,
        weeks: 0,
        days: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    taskContent.push(inputTitle.value);
    taskContent.push(inputDescription.value);
    taskContent.push(format(date, 'MM/dd/yyyy'));
    taskContent.push(inputPriority.checked);
    taskContent.push(inputNotes.value);

    return taskContent;
}