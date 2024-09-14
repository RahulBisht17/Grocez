import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALOJvSTNzeal3M323uLFp8PCAL8B8OHoU",
  authDomain: "grocez.firebaseapp.com",
  projectId: "grocez",
  storageBucket: "grocez.appspot.com",
  messagingSenderId: "564333506714",
  appId: "1:564333506714:web:7c299a0bca58831bb02f23",
  measurementId: "G-N8H8KD3GJY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
