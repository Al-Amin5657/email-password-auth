// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDloL-5a4QxW9-k_gtQATFewfM2xmTfGRo",
    authDomain: "email-password-auth-ded46.firebaseapp.com",
    projectId: "email-password-auth-ded46",
    storageBucket: "email-password-auth-ded46.appspot.com",
    messagingSenderId: "524001259867",
    appId: "1:524001259867:web:00b1a67c84bdd97e146a7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;