import React, { useState } from 'react';
import './Image.css';
export const Image = ({ src, alt, ...props }) => {
    const [finished, setFinished] = useState(false);
    const [returnNull, setReturnNull] = useState(false);
    if (!alt) {
        console.warn('Image is missing an alt attribute:', src);
    }
    if (returnNull) {
        return null;
    }
    return React.createElement("img", { style: { visibility: finished ? 'visible' : 'hidden', ...(props.style ?? {}) }, src: src, alt: alt, onError: () => setReturnNull(true), onLoad: () => setFinished(true), ...props });
};
export const Thumbnail = ({ src, alt, ...props }) => {
    if (!alt) {
        console.warn('Image is missing an alt attribute:', src);
    }
    return React.createElement(Image, { src: src, alt: alt, ...props, className: 'thumbnail-image' });
};
export const SmallThumbnail = ({ src, alt, ...props }) => {
    if (!alt) {
        console.warn('Image is missing an alt attribute:', src);
    }
    return React.createElement(Image, { src: src, alt: alt, ...props, className: 'small-thumbnail-image' });
};
//# sourceMappingURL=Image.js.map