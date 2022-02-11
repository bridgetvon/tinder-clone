import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjkwj83LgM-uAYDTZGFuFT1Gxtjsd0YG8",
  authDomain: "tinder-clone-1a5ac.firebaseapp.com",
  projectId: "tinder-clone-1a5ac",
  storageBucket: "tinder-clone-1a5ac.appspot.com",
  messagingSenderId: "972600052393",
  appId: "1:972600052393:web:3bfceb1f017975a64db7b8",
  measurementId: "G-YP04WSTQK6"
};

//cloud messaging key 
// BKNooTgMwJhGaMmosEI-q19YqgLxfzSmFY1JOetQMjWPtj9Pxkm-qfGwzS5e_C0dYjl0ZHhl9CCsvRYkC-Ho8sE

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;