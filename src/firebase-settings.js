// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwUQwWsyF1NJwtqWBNKEjvSPADkkyyorY",
  authDomain: "dubekeconsults.firebaseapp.com",
  projectId: "dubekeconsults",
  storageBucket: "dubekeconsults.appspot.com",
  messagingSenderId: "786684763252",
  appId: "1:786684763252:web:7fb95c1428b4c623ea4521",
  measurementId: "G-1B1KTWN093"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
