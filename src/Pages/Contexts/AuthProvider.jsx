import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user by email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user by email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    };

    // Google sign in
    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider )
    }
    
    // Log out user
    const logOut = () => {
        return signOut(auth);
    }

  // Update user profile
  const profile = (name, photoURL) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL });
  };

  // On auth state change implement
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, createUser, profile, loginUser, logOut, googleSignIn };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
