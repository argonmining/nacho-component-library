import { FC, ReactNode } from 'react';
type Props = Record<string, unknown> & {
    to: string;
    tooltip: string;
    children: ReactNode;
};
export declare const LinkWithTooltip: FC<Props>;
export {};
