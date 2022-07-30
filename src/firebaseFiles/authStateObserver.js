import loadTasks from './loadTasks';

export default function authStateObserver(user) {
  const btnLogin = document.querySelector('.btn-login');
  const btnLogout = document.querySelector('.btn-logout');
  const userPhoto = document.querySelector('.user-photo');
  const userName = document.querySelector('.user-name');

  if (user) {
    loadTasks(user);
    btnLogout.classList.add('show');
    btnLogout.classList.remove('hide');

    btnLogin.classList.add('hide');
    btnLogin.classList.remove('show');

    userPhoto.style.backgroundImage = `url(${user.photoURL})`;
    userPhoto.style.display = 'block';

    userName.textContent = user.displayName;
    userName.style.display = 'block';
  } else {
    btnLogout.classList.remove('show');
    btnLogout.classList.add('hide');

    btnLogin.classList.remove('hide');
    btnLogin.classList.add('show');

    userName.style.display = 'none';
    userPhoto.style.display = 'none';
  }

  return user;
}
