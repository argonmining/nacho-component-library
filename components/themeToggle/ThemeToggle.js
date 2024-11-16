import React from "react";
import { useDarkMode } from "../../hooks/darkMode.js";
import './ThemeToggle.css';
export const ThemeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return React.createElement("div", { className: "dark-mode-toggle sidebar-dark-mode-toggle" },
        React.createElement("span", { className: "dark-mode-label" }, isDarkMode ? 'Dark' : 'Light'),
        React.createElement("label", { className: "switch" },
            React.createElement("input", { type: "checkbox", checked: isDarkMode, onChange: toggleDarkMode }),
            React.createElement("span", { className: "slider" })));
};
//# sourceMappingURL=ThemeToggle.js.map