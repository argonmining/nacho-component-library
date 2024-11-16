type LocalStorage = {
    darkMode: boolean;
};
export declare const getLocalStorageItem: <T extends "darkMode">(key: T) => LocalStorage[T] | null;
export declare const setLocalStorageItem: <T extends "darkMode">(key: T, value: LocalStorage[T]) => void;
export {};
