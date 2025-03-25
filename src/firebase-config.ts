// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSKfdD8M9swCOoeqxmPOPRE3bbkuUX0-w",
  authDomain: "escribir-278fe.firebaseapp.com",
  projectId: "escribir-278fe",
  storageBucket: "escribir-278fe.firebasestorage.app",
  messagingSenderId: "407900136261",
  appId: "1:407900136261:web:799e49d3e7205fedff142c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Db = getFirestore(app);