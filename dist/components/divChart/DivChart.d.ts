import { FC } from 'react';
import './DivChart.css';
type Props = {
    data: {
        label: string;
        percentage: number;
    }[];
    groupLabel: string;
};
export declare const DivChart: FC<Props>;
export {};
