import { signIn } from '../index';

export default function login() {
  const btnLogin = document.querySelector('.btn-login');

  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signIn();
  });
}
