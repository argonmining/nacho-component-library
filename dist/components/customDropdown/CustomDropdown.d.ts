import React, { FC, PropsWithChildren, ReactElement } from "react";
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
export type DropdownRef = {
    close: () => void;
};
export declare const CustomDropdown: React.ForwardRefExoticComponent<Props & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<DropdownRef>>;
type Item = {
    onClick?: () => void;
};
export declare const CustomDropdownItem: FC<PropsWithChildren<Item>>;
export {};
