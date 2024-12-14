import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Ensure this is imported

// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // Use VITE_ prefix for Vite
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// Initialize Firebase Authentication and get a reference to the service
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const firestore = getFirestore(app); // Initialize Firestore

// Export both Auth and Firestore
export { auth, firestore };