// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);
export const auth = getAuth(app);