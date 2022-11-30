import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAVz0CuXs7dNxV-DIbaC0ed9DDppUH__Vk",
    authDomain: "big-bazar-d807c.firebaseapp.com",
    projectId: "big-bazar-d807c",
    storageBucket: "big-bazar-d807c.appspot.com",
    messagingSenderId: "1040033307870",
    appId: "1:1040033307870:web:9a1c9aca3ffc617707764f",
    measurementId: "G-MYEEYXEC7E",
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
