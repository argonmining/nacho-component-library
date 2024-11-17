type LocalStorage = {
    darkMode: boolean;
};
export declare const getLocalStorageItem: <T extends keyof LocalStorage>(key: T) => LocalStorage[T] | null;
export declare const setLocalStorageItem: <T extends keyof LocalStorage>(key: T, value: LocalStorage[T]) => void;
export {};
