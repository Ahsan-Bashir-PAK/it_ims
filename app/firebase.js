
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

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
export const myfire = getFirestore(app)