// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Correct import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx6565VO0pADEsXr_dHRB1IOCh7_ERpRY",
  authDomain: "circuit-corner.firebaseapp.com",
  projectId: "circuit-corner",
  storageBucket: "circuit-corner.appspot.com",
  messagingSenderId: "1000878955530",
  appId: "1:1000878955530:web:78f2abd66897ab2eb513f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Initialize app

export const auth = getAuth(app); // Initialize and export auth
export const db = getFirestore(app); // Initialize and export Firestore
export default app;
