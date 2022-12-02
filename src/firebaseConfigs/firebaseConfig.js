// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHhLWPmtm-FaMMamKyIWo1bU82SNf_CTg",
  authDomain: "getartapp-22114.firebaseapp.com",
  projectId: "getartapp-22114",
  storageBucket: "getartapp-22114.appspot.com",
  messagingSenderId: "375364417223",
  appId: "1:375364417223:web:83205f793358519321b0e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
