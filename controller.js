// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpIfhI-aGKoH49bnU8TjhXIXnz-qOEL_M",
  authDomain: "mobile2025-67d4d.firebaseapp.com",
  projectId: "mobile2025-67d4d",
  storageBucket: "mobile2025-67d4d.firebasestorage.app",
  messagingSenderId: "888969144423",
  appId: "1:888969144423:web:a11673442ae97f4fa44cc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);