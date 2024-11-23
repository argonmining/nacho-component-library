import { Dispatch, FC, SetStateAction } from "react";
import './Input.css';
type Props = {
    placeholder?: string;
    value?: string;
    onChangeCallback?: (value: string) => void | Dispatch<SetStateAction<string>>;
    onSubmit: (value: string) => void;
    debounced?: boolean;
    customClass?: string;
};
export declare const Input: FC<Props>;
export {};
