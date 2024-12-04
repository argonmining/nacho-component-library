import { FC, PropsWithChildren, ReactElement } from 'react';
import './DropdownButton.css';
type Props = {
    title?: ReactElement;
    menuTheme?: 'header' | 'normal';
};
export declare const IconDropdownButton: FC<PropsWithChildren<Props>>;
export {};
