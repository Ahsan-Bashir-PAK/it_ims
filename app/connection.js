// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLY7-ZCHw5YCUNbxxv1-EYLy1nMBRuV08",
  authDomain: "it-store-a3fb7.firebaseapp.com",
  projectId: "it-store-a3fb7",
  storageBucket: "it-store-a3fb7.appspot.com",
  messagingSenderId: "196639406329",
  appId: "1:196639406329:web:a421b070e4e47de394ca28",
  measurementId: "G-ELK8FWEQX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);