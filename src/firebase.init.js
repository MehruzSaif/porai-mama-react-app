// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_d569Bty0JTBu2cmfRzjO3tppbqCUn2E",
    authDomain: "purai-fit-mama.firebaseapp.com",
    projectId: "purai-fit-mama",
    storageBucket: "purai-fit-mama.appspot.com",
    messagingSenderId: "72295943019",
    appId: "1:72295943019:web:30ccd6ad64f3cab4bcda2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;