// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUZY5jwmHUSxUZ6mmP7CtxGLQGAidGEhM",
  authDomain: "animetoyemporium.firebaseapp.com",
  projectId: "animetoyemporium",
  storageBucket: "animetoyemporium.appspot.com",
  messagingSenderId: "157605824066",
  appId: "1:157605824066:web:c12161718843b7817f0fdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;