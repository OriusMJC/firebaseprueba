// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0K7eL03zhZclycvutV4Nc_K6lOvQRkRE",
  authDomain: "fir-tuto-d6b38.firebaseapp.com",
  projectId: "fir-tuto-d6b38",
  storageBucket: "fir-tuto-d6b38.appspot.com",
  messagingSenderId: "595085462503",
  appId: "1:595085462503:web:74e6bce729f9b0ea92cb42",
  measurementId: "G-D02N1DWY88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth, createUserWithEmailAndPassword}