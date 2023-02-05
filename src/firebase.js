import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSHHV-uTDAl1lQiWXVOmph_dkBV-hL6iY",
  authDomain: "linkedin-clone-78faa.firebaseapp.com",
  projectId: "linkedin-clone-78faa",
  storageBucket: "linkedin-clone-78faa.appspot.com",
  messagingSenderId: "687787663484",
  appId: "1:687787663484:web:1c971a9105f75eaccde9f9",
  measurementId: "G-KPS38VQM3M",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
