import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsTdnChpkIk2AeUPQjGs2ZBkS8ajJejI8",
  authDomain: "chat-d97ed.firebaseapp.com",
  projectId: "chat-d97ed",
  storageBucket: "chat-d97ed.appspot.com",
  messagingSenderId: "69666243860",
  appId: "1:69666243860:web:12d31d9ec747056e4b6e01",
  measurementId: "G-LLFR420584"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
export { doc, setDoc } from "firebase/firestore";
export { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";