// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjkwj83LgM-uAYDTZGFuFT1Gxtjsd0YG8",
  authDomain: "tinder-clone-1a5ac.firebaseapp.com",
  projectId: "tinder-clone-1a5ac",
  storageBucket: "tinder-clone-1a5ac.appspot.com",
  messagingSenderId: "972600052393",
  appId: "1:972600052393:web:3bfceb1f017975a64db7b8",
  measurementId: "G-YP04WSTQK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;