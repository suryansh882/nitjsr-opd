// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlhkADMFsB-5NWwdP3jrCnOkrgy9Z0T40",
  authDomain: "hospital-ade0c.firebaseapp.com",
  projectId: "hospital-ade0c",
  storageBucket: "hospital-ade0c.appspot.com",
  messagingSenderId: "365299155815",
  appId: "1:365299155815:web:e2ba60702b8ded64d625c2",
  measurementId: "G-04N2J3L5VB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Access Firebase Authication
export const auth = getAuth(app);
// Access Firebase Cloude Database
export const db = getFirestore(app);
// Access Firebase Cloude Storage
export const st = getStorage(app);

/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 */
