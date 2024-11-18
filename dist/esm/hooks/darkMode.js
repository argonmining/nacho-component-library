import React, { useEffect, useState, createContext, useContext } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "../services/LocalStorageHelper";
const DarkModeContext = createContext({
    isDarkMode: false,
    toggleDarkMode: () => undefined
});
export const DarkModeProvider = ({ children }) => {
    var _a;
    const [isDarkMode, setIsDarkMode] = useState((_a = getLocalStorageItem('darkMode')) !== null && _a !== void 0 ? _a : false);
    useEffect(() => {
        if (getLocalStorageItem('darkMode') === null) {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(prefersDarkMode);
        }
    }, []);
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);
    const toggleDarkMode = () => {
        setIsDarkMode(current => {
            setLocalStorageItem('darkMode', !current);
            return !current;
        });
    };
    return React.createElement(DarkModeContext.Provider, { value: { isDarkMode, toggleDarkMode } }, children);
};
export const useDarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    return { isDarkMode, toggleDarkMode };
};
//# sourceMappingURL=darkMode.js.map