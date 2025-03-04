import { ReactElement } from "react";
import './List.css';
type Props<T> = {
    headerElements: string[];
    items: T[];
    itemHeight?: number;
    minItemHeight?: number;
    gridTemplate?: number[] | string;
    getRow?: (item: T) => ReactElement;
    getElement?: (header: string | Partial<keyof T>, item: T, index: number) => ReactElement | null;
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
}>({ headerElements, getHeader, showHeader, items, itemHeight, minItemHeight, gridTemplate, getRow, getElement, isLoading, cssGrid, alternateIdKey, noDataText, onClickRow }: HeadlessList<T> | List<T>) => ReactElement;
export {};
