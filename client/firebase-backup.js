// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv-Zc-9XZSeiMu-vikmMAB9D3j0_GF-l8",
  authDomain: "portfolio-project-222fa.firebaseapp.com",
  projectId: "portfolio-project-222fa",
  storageBucket: "portfolio-project-222fa.appspot.com",
  messagingSenderId: "453261442156",
  appId: "1:453261442156:web:6c9caa3d05c876fc85ac49",
  measurementId: "G-D80GKHPV7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);