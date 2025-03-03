import React, { createContext, useContext, useState } from "react";
const themeContext = createContext();

const ThemeProvider = ({ children }) => {
    
    const [theme, setTheme] = useState("light");

    return (
        <div>
            <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>
        </div>
    );
};

export default ThemeProvider;

export const useTheme = () => {
    return useContext(themeContext);
};
