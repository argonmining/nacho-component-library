import { CardProps, CardTextProps, CardTitleProps } from "react-bootstrap";
import { FC, PropsWithChildren, ReactNode } from "react";
type BaseCardType = {
    title: string;
    icon: ReactNode;
};
type FeatureCard = BaseCardType & {
    link: string;
};
export declare const FeatureCard: FC<FeatureCard>;
type StatCard = BaseCardType & {
    value: string;
};
export declare const StatCard: FC<StatCard>;
type NormalCard = {
    title: string;
    titleProps?: CardTitleProps;
    textProps?: CardTextProps;
    children: ReactNode;
};
export declare const NormalCard: FC<NormalCard>;
export declare const CollapseAbleCard: FC<PropsWithChildren<CardProps>>;
export declare const ExpandableCard: FC<PropsWithChildren<CardProps>>;
export {};
