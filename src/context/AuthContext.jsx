import React, { useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  sendPasswordResetEmail, 
  updateProfile 
} from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../components/ui/Navbar'; // Assuming you've exported AuthContext from Navbar

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign Up (Create Account)
  const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setIsAuthenticated(true);
      return userCredential.user;
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setIsAuthenticated(true);
      return userCredential.user;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  };

  // Reset Password
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('Password reset email sent successfully');
      return true;
    } catch (error) {
      console.error("Error sending password reset email:", error);
      throw error;
    }
  };

  // Update Profile
  const updateUserProfile = async (displayName, photoURL) => {
    try {
      if (!auth.currentUser) {
        throw new Error('No authenticated user found');
      }
      await updateProfile(auth.currentUser, { displayName, photoURL });
      setUser({ ...auth.currentUser, displayName, photoURL });
      console.log('User profile updated successfully');
      return auth.currentUser;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  };

  // Monitor Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser);
        setIsAuthenticated(true);
      } else {
        // User is signed out
        setUser(null);
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Value to be provided to consuming components
  const authContextValue = {
    isAuthenticated,
    user,
    login,
    logout,
    signUp,
    resetPassword, // New logic for resetting password
    updateUserProfile, // New logic for updating profile
    loading
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Optional: Custom hook for easier context consumption
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
