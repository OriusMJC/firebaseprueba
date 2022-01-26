import firebase from 'firebase'
import 'firebase/auth'

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
  const fire = initializeApp(firebaseConfig);
  const auth = fire.auth()

export {auth}