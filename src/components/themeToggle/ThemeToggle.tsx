import React, {FC} from "react";
import './ThemeToggle.css'
import {useDarkMode} from "../../hooks/darkMode";

export const ThemeToggle:FC = () => {
    const {isDarkMode, toggleDarkMode} = useDarkMode()
    return <div className="dark-mode-toggle sidebar-dark-mode-toggle">
                            <span className="dark-mode-label">
                                {isDarkMode ? 'Dark' : 'Light'}
                            </span>
        <label className="switch">
            <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
            />
            <span className="slider"></span>
        </label>
    </div>
}
