// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3UIMB_Z9ULz-nsJK_60WVMzgS-yp1TRA",
  authDomain: "instaclone-11122.firebaseapp.com",
  projectId: "instaclone-11122",
  storageBucket: "instaclone-11122.appspot.com",
  messagingSenderId: "861303033675",
  appId: "1:861303033675:web:3d8d6245bda6fc6baca2ce",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export {app,db,storage}