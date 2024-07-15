// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCGP1IL5Ra5vwISFnkit5_3CBmaC4pTIaA",
  authDomain: "ecommerce-bb3a4.firebaseapp.com",
  projectId: "ecommerce-bb3a4",
  storageBucket: "ecommerce-bb3a4.appspot.com",
  messagingSenderId: "362312925478",
  appId: "1:362312925478:web:e35a7feafe60ebab70c1e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app)

export {fireDB, auth}