"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDarkMode = exports.DarkModeProvider = void 0;
const react_1 = __importStar(require("react"));
const LocalStorageHelper_1 = require("../services/LocalStorageHelper");
const DarkModeContext = (0, react_1.createContext)({
    isDarkMode: false,
    toggleDarkMode: () => undefined
});
const DarkModeProvider = ({ children }) => {
    var _a;
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)((_a = (0, LocalStorageHelper_1.getLocalStorageItem)('darkMode')) !== null && _a !== void 0 ? _a : false);
    (0, react_1.useEffect)(() => {
        if ((0, LocalStorageHelper_1.getLocalStorageItem)('darkMode') === null) {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(prefersDarkMode);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);
    const toggleDarkMode = () => {
        setIsDarkMode(current => {
            (0, LocalStorageHelper_1.setLocalStorageItem)('darkMode', !current);
            return !current;
        });
    };
    return react_1.default.createElement(DarkModeContext.Provider, { value: { isDarkMode, toggleDarkMode } }, children);
};
exports.DarkModeProvider = DarkModeProvider;
const useDarkMode = () => {
    const { isDarkMode, toggleDarkMode } = (0, react_1.useContext)(DarkModeContext);
    return { isDarkMode, toggleDarkMode };
};
exports.useDarkMode = useDarkMode;
//# sourceMappingURL=darkMode.js.map