import { FC } from 'react';
import './Image.css';
import { ImageProps } from "react-bootstrap";
type Props = ImageProps & {
    src: string;
    alt: string;
};
export declare const Image: FC<Props>;
export declare const Thumbnail: FC<Props>;
export declare const SmallThumbnail: FC<Props>;
export {};
