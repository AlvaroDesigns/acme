// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC033E4BZuA1TOBxM2IiYT4dYGnrqmAKfg",
  authDomain: "acme-88503.firebaseapp.com",
  projectId: "acme-88503",
  storageBucket: "acme-88503.appspot.com",
  messagingSenderId: "66094163994",
  appId: "1:66094163994:web:b4658021bbfcb6a0e8c9a3",
  measurementId: "G-D0Z272XPT5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
