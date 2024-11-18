import { ReactElement } from "react";
import { TableProps } from "react-bootstrap";
type Props<T> = {
    isLoading?: boolean;
    headEntries: string[];
    entries: T[];
    getRowData: (data: T, index: number) => ReactElement;
    getExpandData: (data: T, index: number) => ReactElement;
    props?: TableProps;
};
export declare const ExpandAbleList: <T extends Record<string, unknown>>({ isLoading, headEntries, entries, getRowData, getExpandData, props }: Props<T>) => ReactElement;
export {};
