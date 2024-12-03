import { FC, PropsWithChildren, ReactElement } from "react";
import './CustomDropdown.css';
type Props = {
    title: string | ReactElement;
    containerId?: string;
    className?: string;
    offsetX?: number;
    offsetY?: number;
    alwaysUp?: boolean;
    stayOpen?: boolean;
};
export declare const CustomDropdown: FC<PropsWithChildren<Props>>;
type Item = {
    onClick?: () => void;
};
export declare const CustomDropdownItem: FC<PropsWithChildren<Item>>;
export {};
