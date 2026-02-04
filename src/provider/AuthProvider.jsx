import React, {  createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext(null);





const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }


    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('Current User in State Observer', currentUser);
        setLoading(false);

        // 1. Check if currentUser exists before accessing .email
        if (currentUser && currentUser.email) {
            const loggedUser = { email: currentUser.email };
            
            // This is the "Automatic" part you wanted!
            // Every time the user logs in or refreshes, a new token is fetched.
            axios.post('https://car-doctor-server-lemon-two.vercel.app/jwt', loggedUser, { withCredentials: true })
                .then(res => {
                    console.log('Token response:', res.data);
                });
        } else {
            // 2. Optional: Clear the cookie on the server side when user logs out
            axios.post('https://car-doctor-server-lemon-two.vercel.app/logout', {} , { withCredentials: true })
                .then(res => {
                    console.log('Logged out from server');
                });
        }
    });
        return() =>{
            return unsubscribe();
        }
    }, [])

    const userInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;