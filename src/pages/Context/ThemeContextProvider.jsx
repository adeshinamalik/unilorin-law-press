import ThemeContext from './ThemeContext';
import { useState } from 'react';

const ThemeContextProvider = ({ children }) => {
    const [showLogin, setShowLogin] = useState(false);
    // const [loginDisplay, setLoginDisplay] = useState("dontdisplaylogin");
    return (
        <ThemeContext.Provider value={{ showLogin, setShowLogin}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
