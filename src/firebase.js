import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyBrck1di7_N7B2d-H8mwZud17N9CYgC8wc",
    authDomain: "resume-97612.firebaseapp.com",
    projectId: "resume-97612",
    storageBucket: "resume-97612.firebasestorage.app",
    messagingSenderId: "1096541776873",
    appId: "1:1096541776873:web:800d2484b4dab0f98f7978",
    measurementId: "G-08NB72EHST",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 🔥 ADD THIS (critical)
export const auth = getAuth(app);
// Optional (only if you use analytics)
export const analytics = typeof window !== "undefined"
    ? getAnalytics(app)
    : null;
