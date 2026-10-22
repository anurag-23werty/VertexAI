
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vertexai-26e8b.firebaseapp.com",
  projectId: "vertexai-26e8b",
  storageBucket: "vertexai-26e8b.firebasestorage.app",
  messagingSenderId: "585132456586",
  appId: "1:585132456586:web:2e94f03bf356cceef30b73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()