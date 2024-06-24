import { onAuthStateChanged } from "firebase/auth";
import UserContext from "./UserContext";
import React, { useEffect } from 'react'
import { useState } from "react";
import { auth } from "../Firebase/Firebase";

const UserContextProvider = ({ children }) => {
    const [theUser, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true)
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, [isLoggedIn, setIsLoggedIn])
    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, theUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider