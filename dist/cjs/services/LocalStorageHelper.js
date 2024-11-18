"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLocalStorageItem = exports.getLocalStorageItem = void 0;
//Function to get the local storage item
const getLocalStorageItem = (key) => {
    if (key === null || key === undefined || localStorage.getItem(key) === null) {
        return null;
    }
    return JSON.parse(localStorage.getItem(key));
};
exports.getLocalStorageItem = getLocalStorageItem;
//Function to set the local storage item
const setLocalStorageItem = (key, value) => {
    if (value === null || value === undefined) {
        localStorage.removeItem(key);
    }
    localStorage.setItem(key, JSON.stringify(value));
};
exports.setLocalStorageItem = setLocalStorageItem;
//# sourceMappingURL=LocalStorageHelper.js.map