// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDjsbdd3aD3Om56P0r6mdxzLZjp87mKHg",
  authDomain: "gochat-c0318.firebaseapp.com",
  projectId: "gochat-c0318",
  storageBucket: "gochat-c0318.appspot.com",
  messagingSenderId: "894436960874",
  appId: "1:894436960874:web:e8c626f8cd80582f473813"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore();
