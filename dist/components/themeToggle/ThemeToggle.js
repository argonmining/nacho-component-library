import React from "react";
import './ThemeToggle.css';
import { useDarkMode } from "../../hooks/darkMode";
export var ThemeToggle = function () {
    var _a = useDarkMode(), isDarkMode = _a.isDarkMode, toggleDarkMode = _a.toggleDarkMode;
    return React.createElement("div", { className: "dark-mode-toggle sidebar-dark-mode-toggle" },
        React.createElement("span", { className: "dark-mode-label" }, isDarkMode ? 'Dark' : 'Light'),
        React.createElement("label", { className: "switch" },
            React.createElement("input", { type: "checkbox", checked: isDarkMode, onChange: toggleDarkMode }),
            React.createElement("span", { className: "slider" })));
};
