//Function to get the local storage item
export var getLocalStorageItem = function (key) {
    if (key === null || key === undefined || localStorage.getItem(key) === null) {
        return null;
    }
    return JSON.parse(localStorage.getItem(key));
};
//Function to set the local storage item
export var setLocalStorageItem = function (key, value) {
    if (value === null || value === undefined) {
        localStorage.removeItem(key);
    }
    localStorage.setItem(key, JSON.stringify(value));
};
