import showFormAddTask from './showFormAddTask';

export default function header() {
    const btnHome = document.querySelector('.btn-home');
    const btnShowMenu = document.querySelector('.btn-show-menu');
    const btnHeaderAddTask = document.querySelector('.btn-header-add-task');

    btnHome.addEventListener('click', e => {
        location.reload();
    });

    btnShowMenu.addEventListener('click', e => {
        e.preventDefault();

        const dashboard = document.querySelector('.dashboard');
        const container = document.querySelector('.container');

        for (let classList of dashboard.classList) {
            if (classList === 'hide') {
                dashboard.classList.remove('hide');
                container.classList.remove('container-hide-dashboard');
                return;
            }
        }

        dashboard.classList.add('hide');
        container.classList.add('container-hide-dashboard');
    });

    btnHeaderAddTask.addEventListener('click', e => {
        e.preventDefault();

        showFormAddTask();
    });

}