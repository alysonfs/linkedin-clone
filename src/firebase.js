import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getDocs, addDoc, orderBy, collection, serverTimestamp, limit } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCuWDHM1O5qBkd9W4j5PJPFcHE85wuQ_z4",
  authDomain: "linkedin-clone-f6942.firebaseapp.com",
  projectId: "linkedin-clone-f6942",
  storageBucket: "linkedin-clone-f6942.appspot.com",
  messagingSenderId: "365987918541",
  appId: "1:365987918541:web:5caeceee7405226e5b2f84"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

export {
  firebaseApp, db, getDocs, addDoc,
  orderBy, collection, serverTimestamp, limit
};