import { signOutUser } from '../index';
import loadTasks from './loadTasks';

export default function logout() {
  const btnLogout = document.querySelector('.btn-logout');

  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
    loadTasks();
  });
}
