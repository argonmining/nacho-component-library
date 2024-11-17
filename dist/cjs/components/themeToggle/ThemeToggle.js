"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeToggle = void 0;
const react_1 = __importDefault(require("react"));
require("./styles.module.css");
const darkMode_1 = require("../../hooks/darkMode");
const ThemeToggle = () => {
    const { isDarkMode, toggleDarkMode } = (0, darkMode_1.useDarkMode)();
    return react_1.default.createElement("div", { className: "dark-mode-toggle sidebar-dark-mode-toggle" },
        react_1.default.createElement("span", { className: "dark-mode-label" }, isDarkMode ? 'Dark' : 'Light'),
        react_1.default.createElement("label", { className: "switch" },
            react_1.default.createElement("input", { type: "checkbox", checked: isDarkMode, onChange: toggleDarkMode }),
            react_1.default.createElement("span", { className: "slider" })));
};
exports.ThemeToggle = ThemeToggle;
//# sourceMappingURL=ThemeToggle.js.map