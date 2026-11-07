
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

const firebaseConfig = {
     apiKey: "AIzaSyBgq2Fv1NbCIK1pZCy45hFkMj9hK9ahkR0",
    authDomain: "fir-signup-d8415.firebaseapp.com",
    databaseURL: "https://fir-signup-d8415-default-rtdb.firebaseio.com",
    projectId: "fir-signup-d8415",
    storageBucket: "fir-signup-d8415.firebasestorage.app",
   messagingSenderId: "704320399176",
   appId: "1:704320399176:web:e85e7f3ecadf247f1a357d",
    measurementId: "G-P0LG5SPCT1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { app, db, auth };