import "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBz-jk6hJk6G1lAhE4XF_9i95CyKd3R7pE",
    authDomain: "strings-44989.firebaseapp.com",
    projectId: "strings-44989",
    storageBucket: "strings-44989.appspot.com",
    messagingSenderId: "1029770477052",
    appId: "1:1029770477052:web:388d7423c437c4d82e0679",
    measurementId: "G-55DZ6B61X4",
  })
  .auth();
