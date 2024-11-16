import { FC, PropsWithChildren } from 'react';
export declare const DarkModeProvider: FC<PropsWithChildren>;
export declare const useDarkMode: () => {
    toggleDarkMode: () => void;
    isDarkMode: boolean;
};
