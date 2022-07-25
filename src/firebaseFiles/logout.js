import { signOutUser } from '../index';

export default function logout() {
  const btnLogout = document.querySelector('.btn-logout');

  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    signOutUser();
  });
}
