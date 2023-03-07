// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAA_TG_r5pwLx-xQcacdbQQ_4zyuT-np2M",
    authDomain: "gumball-machine-c12e3.firebaseapp.com",
    projectId: "gumball-machine-c12e3",
    storageBucket: "gumball-machine-c12e3.appspot.com",
    messagingSenderId: "481691885045",
    appId: "1:481691885045:web:03368f0b8ac257947794bc",
    measurementId: "G-1Z357J8MGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
