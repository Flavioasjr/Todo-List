export default function formTask() {
    const inputTitle = document.querySelector('#title');
    const inputDescription = document.querySelector('#description');
    const inputDate = document.querySelector('#date');
    const inputPriority = document.querySelector('#priority');
    const inputNotes = document.querySelector('#notes');

    let taskContent = [];
        
    if (!inputTitle.value || !inputDate.value) return false;

    taskContent.push(inputTitle.value);
    taskContent.push(inputDescription.value);
    taskContent.push(inputDate.value);
    taskContent.push(inputPriority.checked);
    taskContent.push(inputNotes.value);

    return taskContent;
}