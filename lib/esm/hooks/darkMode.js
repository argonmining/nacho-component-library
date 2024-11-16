import React, { useEffect, useState, createContext, useContext } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "../services/LocalStorageHelper";
var DarkModeContext = createContext({
    isDarkMode: false,
    toggleDarkMode: function () { return undefined; }
});
export var DarkModeProvider = function (_a) {
    var _b;
    var children = _a.children;
    var _c = useState((_b = getLocalStorageItem('darkMode')) !== null && _b !== void 0 ? _b : false), isDarkMode = _c[0], setIsDarkMode = _c[1];
    useEffect(function () {
        if (getLocalStorageItem('darkMode') === null) {
            var prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(prefersDarkMode);
        }
    }, []);
    useEffect(function () {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);
    var toggleDarkMode = function () {
        setIsDarkMode(function (current) {
            setLocalStorageItem('darkMode', !current);
            return !current;
        });
    };
    return React.createElement(DarkModeContext.Provider, { value: { isDarkMode: isDarkMode, toggleDarkMode: toggleDarkMode } }, children);
};
export var useDarkMode = function () {
    var _a = useContext(DarkModeContext), isDarkMode = _a.isDarkMode, toggleDarkMode = _a.toggleDarkMode;
    return { isDarkMode: isDarkMode, toggleDarkMode: toggleDarkMode };
};
