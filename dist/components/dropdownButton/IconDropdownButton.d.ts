import { FC, PropsWithChildren, ReactElement } from 'react';
import './DropdownButton.css';
type Props = {
    title?: ReactElement;
    theme?: 'header' | 'normal';
};
export declare const IconDropdownButton: FC<PropsWithChildren<Props>>;
export {};
