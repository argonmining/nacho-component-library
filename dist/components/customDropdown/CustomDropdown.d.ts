import { FC, PropsWithChildren, ReactElement } from "react";
import './CustomDropdown.css';
type Props = {
    title: string | ReactElement;
    className?: string;
};
export declare const CustomDropdown: FC<PropsWithChildren<Props>>;
export {};
