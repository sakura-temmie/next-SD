import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJEbaF2gs-psPoMA7VagDTBaYyfAP49yU",
  authDomain: "my-next-project-b078d.firebaseapp.com",
  databaseURL: "https://my-next-project-b078d.firebaseio.com",
  projectId: "my-next-project-b078d",
  storageBucket: "my-next-project-b078d.appspot.com",
  messagingSenderId: "822453323574",
  appId: "1:822453323574:web:3f4c33c2d72012c9079597",
  measurementId: "G-3DE5NEZJ13",
};
initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
