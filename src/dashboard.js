import showTasksToday from './showTasksToday';
import showTasksInbox from './showTasksInbox';
import removeTask from './removeTask';
import showTaskInformation from './showTaskInformation';

export default function dashboard() {
    const linkInbox = document.querySelector('.link-inbox');
    const linkToday = document.querySelector('.link-today');

    linkInbox.addEventListener('click', e => {
        e.preventDefault();
        const inbox = document.querySelector('.inbox');
        const today = document.querySelector('.today');

        inbox.classList.remove('hide');
        today.classList.remove('show');

        showTasksInbox();
        removeTask();
        showTaskInformation();
    });

    linkToday.addEventListener('click', e => {
        e.preventDefault();
        const inbox = document.querySelector('.inbox');
        const today = document.querySelector('.today');

        inbox.classList.add('hide');
        today.classList.add('show');

        showTasksToday();
        removeTask();
        showTaskInformation();
    });
}