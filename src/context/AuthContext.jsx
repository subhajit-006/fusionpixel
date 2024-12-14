// Inside your AuthContext.jsx

import React, { 
    useContext, 
    useState, 
    useEffect, 
    useCallback, 
    useMemo 
} from 'react';
import { 
    auth, 
    firestore 
} from '../firebase';  // Correct import for firestore
import { 
    PhoneAuthProvider,
    signInWithPhoneNumber,
    signOut,
    onAuthStateChanged,
    RecaptchaVerifier,
    signInWithCredential
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Custom error class for more detailed error handling
class AuthError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        this.name = 'AuthError';
    }
}

// Authentication Context
const AuthContext = React.createContext();

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [verificationId, setVerificationId] = useState(null);
    const [userProfile, setUserProfile] = useState(null);

    const recaptchaContainerRef = React.useRef(null);

    const setupRecaptcha = useCallback(() => {
        if (recaptchaContainerRef.current) {
            return new RecaptchaVerifier(
                recaptchaContainerRef.current,
                {
                    size: 'invisible',
                    callback: (response) => {
                        console.log('reCAPTCHA verified successfully');
                    },
                    'error-callback': (error) => {
                        console.error('reCAPTCHA error:', error);
                    }
                },
                auth
            );
        }
        return null;
    }, []);

    const sendOTP = useCallback(async (phoneNumber) => {
        try {
            const formattedPhone = phoneNumber.startsWith('+') 
                ? phoneNumber 
                : `+1${phoneNumber.replace(/\D/g, '')}`;

            const recaptchaVerifier = setupRecaptcha();
            
            if (!recaptchaVerifier) {
                throw new AuthError('recaptcha-error', 'Failed to initialize reCAPTCHA');
            }

            const confirmationResult = await signInWithPhoneNumber(
                auth, 
                formattedPhone, 
                recaptchaVerifier
            );

            setVerificationId(confirmationResult.verificationId);
            return confirmationResult;
        } catch (error) {
            console.error('OTP Send Error:', error);
            throw new AuthError(
                error.code || 'send-otp-error', 
                error.message || 'Failed to send OTP'
            );
        }
    }, [setupRecaptcha]);

    const verifyOTP = useCallback(async (otpCode) => {
        if (!verificationId) {
            throw new AuthError('no-verification-id', 'No verification process started');
        }

        try {
            const phoneCredential = PhoneAuthProvider.credential(verificationId, otpCode);
            const userCredential = await signInWithCredential(auth, phoneCredential);
            await setupUserProfile(userCredential.user);

            return userCredential.user;
        } catch (error) {
            console.error('OTP Verification Error:', error);
            throw new AuthError(
                error.code || 'verify-otp-error', 
                error.message || 'Invalid or expired OTP'
            );
        }
    }, [verificationId]);

    const setupUserProfile = async (user) => {
        if (!user) return;

        try {
            const userRef = doc(firestore, 'users', user.uid);
            const userSnap = await getDoc(userRef);

            if (!userSnap.exists()) {
                await setDoc(userRef, {
                    uid: user.uid,
                    phoneNumber: user.phoneNumber,
                    createdAt: new Date(),
                    lastLogin: new Date()
                });
            } else {
                await setDoc(userRef, { lastLogin: new Date() }, { merge: true });
            }

            setUserProfile(userSnap.exists() ? userSnap.data() : null);
        } catch (error) {
            console.error('Profile Setup Error:', error);
        }
    };

    const logout = useCallback(async () => {
        try {
            await signOut(auth);
            setUserProfile(null);
        } catch (error) {
            console.error('Logout Error:', error);
            throw new AuthError(
                error.code || 'logout-error', 
                error.message || 'Failed to logout'
            );
        }
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth, 
            async (user) => {
                setCurrentUser(user);
                
                if (user) {
                    await setupUserProfile(user);
                }

                setLoading(false);
            },
            (error) => {
                console.error('Auth State Change Error:', error);
                setLoading(false);
            }
        );

        return () => {
            unsubscribe();
            if (recaptchaContainerRef.current) {
                recaptchaContainerRef.current.innerHTML = '';
            }
        };
    }, [setupUserProfile]);

    const value = useMemo(() => ({
        currentUser,
        userProfile,
        sendOTP,
        verifyOTP,
        logout,
        loading,
        recaptchaContainerRef
    }), [currentUser, userProfile, sendOTP, verifyOTP, logout, loading]);

    return (
        <AuthContext.Provider value={value}>
            {!loading && (
                <>
                    <div ref={recaptchaContainerRef} />
                    {children}
                </>
            )}
        </AuthContext.Provider>
    );
}

// Now export AuthError properly
export { AuthError };
