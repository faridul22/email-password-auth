// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxPeN2hsCiNZbb0PPj-55zrSxPR8YlMNw",
    authDomain: "email-password-auth-fbccc.firebaseapp.com",
    projectId: "email-password-auth-fbccc",
    storageBucket: "email-password-auth-fbccc.appspot.com",
    messagingSenderId: "515617501178",
    appId: "1:515617501178:web:959003d946c2402a9ffe43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;