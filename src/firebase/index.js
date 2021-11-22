// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5bM05S3qq1fRG8LqdrGgji7kIKT9Tns8",
    authDomain: "github-568d6.firebaseapp.com",
    projectId: "github-568d6",
    storageBucket: "github-568d6.appspot.com",
    messagingSenderId: "746297842030",
    appId: "1:746297842030:web:72eae2b176fecacf16897f",
    measurementId: "G-3PYWJZVGVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export  {app,db}