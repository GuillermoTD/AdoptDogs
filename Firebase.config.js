// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnyrtzUtYAsOjltompUvOlkDj0IyRzIeU",
  authDomain: "adopcionperros-49000.firebaseapp.com",
  projectId: "adopcionperros-49000",
  storageBucket: "adopcionperros-49000.appspot.com",
  messagingSenderId: "478003440084",
  appId: "1:478003440084:web:fd026789fd28a20eb18e41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)

