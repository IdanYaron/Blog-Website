// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkXRFlnyEPnB9Jj9_WpUCuBvexXlIq9Qo",
    authDomain: "bolgproject-6176e.firebaseapp.com",
    projectId: "bolgproject-6176e",
    storageBucket: "bolgproject-6176e.appspot.com",
    messagingSenderId: "390687934665",
    appId: "1:390687934665:web:e698242e3f5ae8115fa518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();