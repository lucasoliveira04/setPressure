import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAW9r1xU6rWvxXSQnRuV9eqiWMNRUdvDZs",
  authDomain: "sheet-family.firebaseapp.com",
  projectId: "sheet-family",
  storageBucket: "sheet-family.firebasestorage.app",
  messagingSenderId: "112824709328",
  appId: "1:112824709328:web:88d2057d8d522f7626eed5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {
  db,
  auth,
  provider,
  collection,
  addDoc,
  signInWithPopup,
}