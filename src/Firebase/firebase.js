import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
;
const firebaseConfig = {
  apiKey: "AIzaSyBuS7uRSGDi021otIbc03BPD_W7bwFJUT4",
  authDomain: "updatedblog-17eae.firebaseapp.com",
  projectId: "updatedblog-17eae",
  storageBucket: "updatedblog-17eae.firebasestorage.app",
  messagingSenderId: "677516483428",
  appId: "1:677516483428:web:67b647c00e121947ef7871",
  measurementId: "G-2N1GMF6YFC",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
