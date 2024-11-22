import { FC, PropsWithChildren, ReactElement } from "react";
import './Page.css';
type Props = {
    header: string;
    additionalHeaderInfo?: ReactElement;
};
export declare const Page: FC<PropsWithChildren<Props>>;
export {};
