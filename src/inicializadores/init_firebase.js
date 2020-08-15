import admin from 'firebase-admin';
import dotenv from 'dotenv';
import { createRequire } from 'module';
dotenv.config();
const require = createRequire(import.meta.url);

const serviceAccount = require("../../data/telegrambotbcc-firebase-adminsdk-xcrhy-9448af7119.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

export const db = admin.firestore();
