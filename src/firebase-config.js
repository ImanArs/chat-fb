// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Rt2yuHptDHAI5vLwKvA_LLkrvB3fX0c",
  authDomain: "chatapp-9b827.firebaseapp.com",
  projectId: "chatapp-9b827",
  storageBucket: "chatapp-9b827.appspot.com",
  messagingSenderId: "13247395317",
  appId: "1:13247395317:web:ee0530631c2bfaaec0dcbc"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore();
