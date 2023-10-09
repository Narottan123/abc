// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7-FMZ16rjkj4FFBjqjhSLPNdJ3qPyFo8",
  authDomain: "netflix-b46aa.firebaseapp.com",
  projectId: "netflix-b46aa",
  storageBucket: "netflix-b46aa.appspot.com",
  messagingSenderId: "770321615677",
  appId: "1:770321615677:web:80fde73b39e08a458a5354",
  measurementId: "G-69PZ19FLT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);