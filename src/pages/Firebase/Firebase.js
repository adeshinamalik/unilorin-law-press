// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXvvifOzgIwPl4QuNtItclKyhfezvLoTg",
    authDomain: "unilorin-law-student-society.firebaseapp.com",
    projectId: "unilorin-law-student-society",
    storageBucket: "unilorin-law-student-society.appspot.com",
    messagingSenderId: "822457216356",
    appId: "1:822457216356:web:ab922e48af5dc7947b5e71",
    measurementId: "G-PGBMWBCL28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { app, auth, analytics, db, storage };
