import { FC, ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';
type Props = LinkProps & {
    to: string;
    tooltip: string;
    children: ReactNode;
};
export declare const LinkWithTooltip: FC<Props>;
export {};
