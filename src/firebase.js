// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR2M2jU8t5wbq_rJto0_zKb0Qb_CQQTpA",
  authDomain: "souri-bkk-app.firebaseapp.com",
  projectId: "souri-bkk-app",
  storageBucket: "souri-bkk-app.firebasestorage.app",
  messagingSenderId: "472243043266",
  appId: "1:472243043266:web:768a7df9f1d0e0a6d1745b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
