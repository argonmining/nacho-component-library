import { FC, PropsWithChildren, ReactElement } from "react";
import './Page.css';
type Props = {
    header: string;
    additionalHeaderInfo?: string;
    additionalHeaderComponent?: ReactElement;
    className?: string;
};
export declare const Page: FC<PropsWithChildren<Props>>;
export {};
