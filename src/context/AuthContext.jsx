// Import necessary libraries and Firebase functions
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase"; // Ensure Firebase is configured correctly
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
} from "firebase/auth";

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export function useAuth() {
    return useContext(AuthContext);
}

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    // Function to handle user signup
    const signup = async ({ email, password, displayName }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (displayName) {
                await updateProfile(user, { displayName });
            }

            setCurrentUser({ ...user, displayName });
            return user;
        } catch (error) {
            console.error("Error signing up: ", error);
            throw new Error(error.message);
        }
    };

    // Function to handle user login
    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setCurrentUser(userCredential.user);
            return userCredential.user;
        } catch (error) {
            console.error("Error logging in: ", error);
            throw new Error(error.message);
        }
    };

    // Function to handle user logout
    const logout = async () => {
        try {
            await signOut(auth);
            setCurrentUser(null);
        } catch (error) {
            console.error("Error logging out: ", error);
            throw new Error(error.message);
        }
    };

    const value = {
        currentUser,
        signup,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
