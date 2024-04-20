
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwuYy28QeAbMdk88AaDSZ2wZuOE6dMnAo",
  authDomain: "adm-eventos-6162f.firebaseapp.com",
  projectId: "adm-eventos-6162f",
  storageBucket: "adm-eventos-6162f.appspot.com",
  messagingSenderId: "1084476519817",
  appId: "1:1084476519817:web:3123d7d3eb93e692aa1d58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);