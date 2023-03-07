// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjwsqoj9H0NADFKFmqL_dmBkoFBUc0VIc",
  authDomain: "signup-page-6c467.firebaseapp.com",
  projectId: "signup-page-6c467",
  storageBucket: "signup-page-6c467.appspot.com",
  messagingSenderId: "434539451780",
  appId: "1:434539451780:web:7ab1db3d890e61f53df9d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
