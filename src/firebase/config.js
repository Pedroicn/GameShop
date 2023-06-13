import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyANJ7UJ-cZASRnWyST2PW8HjaDa79aV3yQ",
  authDomain: "my-shop-b012e.firebaseapp.com",
  projectId: "my-shop-b012e",
  storageBucket: "my-shop-b012e.appspot.com",
  messagingSenderId: "234846782040",
  appId: "1:234846782040:web:769453f223eae1b8af802d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
