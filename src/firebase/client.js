import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
  apiKey: "AIzaSyCx5aV--rtgJlRInJz0uvch7HF9o8aiDcc",
  authDomain: "e-commerce-1811f.firebaseapp.com",
  projectId: "e-commerce-1811f",
  storageBucket: "e-commerce-1811f.firebasestorage.app",
  messagingSenderId: "620840685600",
  appId: "1:620840685600:web:7f91642d2b11dc2ad8ec45"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
