import { FC, PropsWithChildren, ReactElement } from "react";
import './ExpandableDiv.css';
type PropsWithoutIcon = {
    icon?: never;
    title?: string | ReactElement;
};
type PropsWithIcon = {
    icon?: ReactElement;
    title?: string;
};
type ExpandableDiv = PropsWithoutIcon | PropsWithIcon;
export declare const ExpandableDiv: FC<PropsWithChildren<ExpandableDiv>>;
type ControlledExpandableDiv = ExpandableDiv & {
    id: string;
    isExtended: boolean;
    changeExtended: (id?: string) => void;
};
export declare const ControlledExpandableDiv: FC<PropsWithChildren<ControlledExpandableDiv>>;
export {};
