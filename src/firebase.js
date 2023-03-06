// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATENaoIFAtrmau94ebyWDyN0Q6-jmOEyQ",
  authDomain: "event-manager-f79c4.firebaseapp.com",
  projectId: "event-manager-f79c4",
  storageBucket: "event-manager-f79c4.appspot.com",
  messagingSenderId: "975116910620",
  appId: "1:975116910620:web:fd61605d96c44863f15fd9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
