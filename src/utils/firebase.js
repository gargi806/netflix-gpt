// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG1SuT-m0M-kvi9DJ89fvtpptTKHgllZ4",
  authDomain: "netflix-gpt-4c2de.firebaseapp.com",
  projectId: "netflix-gpt-4c2de",
  storageBucket: "netflix-gpt-4c2de.appspot.com",
  messagingSenderId: "1026821325210",
  appId: "1:1026821325210:web:655b59c0f57026f3acfa23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
