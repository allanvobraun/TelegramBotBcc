import { initializeApp, firestore } from "firebase";
import "firebase/firestore";
import dotenv from 'dotenv';
dotenv.config();


// Initialize Cloud Firestore through Firebase
initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
});

export const db = firestore();
