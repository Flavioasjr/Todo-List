/* eslint-disable no-restricted-globals */
import './calendarStyle.css';
import './style.css';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  addDoc, collection, getFirestore, serverTimestamp,
} from 'firebase/firestore';
import app from './app';
import authStateObserver from './firebaseFiles/authStateObserver';

const firebaseConfig = {
  apiKey: 'AIzaSyAytzaEBk77GYZi6tC4fG-pIGMHxR-uyAs',
  authDomain: 'todo-list-9f9f1.firebaseapp.com',
  projectId: 'todo-list-9f9f1',
  storageBucket: 'todo-list-9f9f1.appspot.com',
  messagingSenderId: '483150612603',
  appId: '1:483150612603:web:a31102d99a6147e0ae3ade',
};

export async function signIn() {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

export function signOutUser() {
  console.log(getAuth().currentUser.uid);
  signOut(getAuth());
}

function initFirebaseAuth() {
  onAuthStateChanged(getAuth(), authStateObserver);
}

function getUserName() {
  return getAuth().currentUser.displayName;
}

export function isUserSignedIn() {
  return !!getAuth().currentUser;
}

export async function saveTask(task) {
  if (!getAuth().currentUser) return;
  console.log('saveTask');
  try {
    await addDoc(collection(getFirestore(), getAuth().currentUser.uid), {
      name: getUserName(),
      task: {
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        priority: task.priority,
        notes: task.notes,
      },
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.log('Erros writing new task to Firebase Database', error);
  }
}

app();

initializeApp(firebaseConfig);

initFirebaseAuth();
