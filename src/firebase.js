// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8iyNNiHJHCWDpm0XK0l5bR0WNF5yeah8",
  authDomain: "look-inside-me.firebaseapp.com",
  projectId: "look-inside-me",
  storageBucket: "look-inside-me.appspot.com",
  messagingSenderId: "911386181739",
  appId: "1:911386181739:web:0fca8d3877156ba34db12e",
  measurementId: "G-6RTLJEV1S9"
};

// Initialize Firebase

export const firebaseInit = () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}
