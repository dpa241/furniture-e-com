// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "furniture-ecom-project.firebaseapp.com",
  projectId: "furniture-ecom-project",
  storageBucket: "furniture-ecom-project.appspot.com",
  messagingSenderId: "341991783135",
  appId: "1:341991783135:web:1261984040afcbd4ffc76a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;