import { ReactElement } from "react";
import './List.css';
type Props<T> = {
    headerElements: string[];
    items: T[];
    itemHeight: number;
    gridTemplate?: number[];
    getRow?: (item: T) => ReactElement;
    getElement?: (header: string | Partial<keyof T>, item: T) => ReactElement | null;
    isLoading?: boolean;
    cssGrid?: boolean;
    alternateIdKey?: keyof T;
    noDataText?: string;
    onClickRow?: (item: T) => void;
};
interface HeadlessList<T> extends Props<T> {
    getHeader?: never;
    showHeader?: boolean;
}
interface List<T> extends Props<T> {
    getHeader?: (header: string) => ReactElement | null;
    showHeader?: never;
}
export declare const List: <T extends Record<string, unknown> & {
    id?: string | number;
}>({ headerElements, getHeader, showHeader, items, itemHeight, gridTemplate, getRow, getElement, isLoading, cssGrid, alternateIdKey, noDataText, onClickRow }: HeadlessList<T> | List<T>) => ReactElement;
export {};
