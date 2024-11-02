import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDS9swu5svTIDtFahcTei5500A41jLhwPs",
    authDomain: "motorbikeshop-76607.firebaseapp.com",
    projectId: "motorbikeshop-76607",
    storageBucket: "motorbikeshop-76607.firebasestorage.app",
    messagingSenderId: "657334369004",
    appId: "1:657334369004:web:7a19556888d069408a43c9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;