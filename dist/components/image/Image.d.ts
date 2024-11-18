import { FC } from 'react';
import './Image.css';
type Props = Record<string, unknown> & {
    src: string;
    alt: string;
};
export declare const Image: FC<Props>;
export declare const Thumbnail: FC<Props>;
export declare const SmallThumbnail: FC<Props>;
export {};
