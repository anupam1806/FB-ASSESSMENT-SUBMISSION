// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZXT0Ub35UtVa21QiQpN4ZUXVrLMRPyZQ",
  authDomain: "myfacebook-ccf5c.firebaseapp.com",
  projectId: "myfacebook-ccf5c",
  storageBucket: "myfacebook-ccf5c.appspot.com",
  messagingSenderId: "711273631218",
  appId: "1:711273631218:web:4ea2464fe5646ec32e6f6b",
  measurementId: "G-YCPSLSWMT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)