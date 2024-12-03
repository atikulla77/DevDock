// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvTxwp581d4wZXNTH0GhjCVOg4U33Y-Fk",
  authDomain: "DevDock-d012e.firebaseapp.com",
  projectId: "DevDock-d012e",
  storageBucket: "DevDock-d012e.appspot.com",
  messagingSenderId: "456309857689",
  appId: "1:456309857689:web:f9e12a82372a0dd03a8708",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
