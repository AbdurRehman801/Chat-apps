import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyBokBkRe5aldzQF7ujUKnb6cjm-FHB-UDU",
  authDomain: "chat-app-v2-d9bde.firebaseapp.com",
  projectId: "chat-app-v2-d9bde",
  storageBucket: "chat-app-v2-d9bde.appspot.com",
  messagingSenderId: "1053786901900",
  appId: "1:1053786901900:web:8c52ae6aec3d957e531aa9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)