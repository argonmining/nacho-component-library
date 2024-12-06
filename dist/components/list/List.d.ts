import { ReactElement } from "react";
import './List.css';
type Props<T> = {
    headerElements: string[];
    getHeader?: (header: string) => ReactElement | null;
    items: T[];
    itemHeight: number;
    gridTemplate?: number[];
    getRow?: (item: T) => ReactElement;
    getElement?: (header: string | Partial<keyof T>, item: T) => ReactElement | null;
    isLoading?: boolean;
    cssGrid?: boolean;
};
export declare const List: <T extends Record<string, unknown> & {
    id: string;
}>({ headerElements, getHeader, items, itemHeight, gridTemplate, getRow, getElement, isLoading, cssGrid }: Props<T>) => ReactElement;
export {};
