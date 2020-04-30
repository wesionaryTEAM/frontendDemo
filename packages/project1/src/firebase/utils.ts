import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";

var config = {
  apiKey: "AIzaSyAQC-p_U_jHrfrT3m2J4_7L7KJD8v2xW1M",
  authDomain: "blog-cbf3b.firebaseapp.com",
  databaseURL: "https://blog-cbf3b.firebaseio.com",
  projectId: "blog-cbf3b",
  storageBucket: "blog-cbf3b.appspot.com",
  messagingSenderId: "622691678681",
  appId: "1:622691678681:web:3935e59945d91a672641c8",
  measurementId: "G-SY0N3V9HJH",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;
