import React from "react";
import './styles.module.css';
import { useDarkMode } from "../../hooks";
export const ThemeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return React.createElement("div", { className: "dark-mode-toggle sidebar-dark-mode-toggle" },
        React.createElement("span", { className: "dark-mode-label" }, isDarkMode ? 'Dark' : 'Light'),
        React.createElement("label", { className: "switch" },
            React.createElement("input", { type: "checkbox", checked: isDarkMode, onChange: toggleDarkMode }),
            React.createElement("span", { className: "slider" })));
};
