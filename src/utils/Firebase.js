// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwpnRMB_zUNpG8-NZsZqqTvnxlVKCdgdE",
  authDomain: "netflixgpt-a0d7c.firebaseapp.com",
  projectId: "netflixgpt-a0d7c",
  storageBucket: "netflixgpt-a0d7c.appspot.com",
  messagingSenderId: "226554305263",
  appId: "1:226554305263:web:35a70a333a241472f2d91a",
  measurementId: "G-SS9ZBWDXKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();