// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8xu1l4InuUrtUUzt-fWCPAGvqrUjIYl8",
  authDomain: "react-cursos-2246a.firebaseapp.com",
  projectId: "react-cursos-2246a",
  storageBucket: "react-cursos-2246a.appspot.com",
  messagingSenderId: "499578345529",
  appId: "1:499578345529:web:177eb3aa15b6457d8c95e8",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
