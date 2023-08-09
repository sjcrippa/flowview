import { initializeApp } from "firebase/app"
//import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEYb-J-XCmGl5B4Ooi9s-ESCiWhIsaA1o",
    authDomain: "event-tracker-32270.firebaseapp.com",
    projectId: "event-tracker-32270",
    storageBucket: "event-tracker-32270.appspot.com",
    messagingSenderId: "312755048760",
    appId: "1:312755048760:web:b642e60496f405e1e471cd",
    measurementId: "G-PY5YC0DM16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
