import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLB6Lt_QvQLIo-Q0WIurEsa9MWdeTqEhs",
  authDomain: "auth-a16f9.firebaseapp.com",
  projectId: "auth-a16f9",
  storageBucket: "auth-a16f9.firebasestorage.app",
  messagingSenderId: "247438256875",
  appId: "1:247438256875:web:2c9c52a4318db7b1c32cae",
  measurementId: "G-HPFYV9C2CW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();