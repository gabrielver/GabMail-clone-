// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf5rtKAZSXhnK2cAMBgwPXcRRyREzOiZ8",
  authDomain: "gabmail-4cc4f.firebaseapp.com",
  projectId: "gabmail-4cc4f",
  storageBucket: "gabmail-4cc4f.appspot.com",
  messagingSenderId: "985780176983",
  appId: "1:985780176983:web:1f35bc5a993fa636ae3b12",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
