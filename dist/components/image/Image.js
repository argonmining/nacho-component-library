var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import './Image.css';
export const Image = (_a) => {
    var _b;
    var { src, alt } = _a, props = __rest(_a, ["src", "alt"]);
    const [finished, setFinished] = useState(false);
    const [returnNull, setReturnNull] = useState(false);
    if (!alt) {
        console.warn('Image is missing an alt attribute:', src);
    }
    if (returnNull) {
        return null;
    }
    return React.createElement("img", Object.assign({ style: Object.assign({ visibility: finished ? 'visible' : 'hidden' }, ((_b = props.style) !== null && _b !== void 0 ? _b : {})), src: src, alt: alt, onError: () => setReturnNull(true), onLoad: () => setFinished(true) }, props));
};
export const Thumbnail = (_a) => {
    var { src, alt } = _a, props = __rest(_a, ["src", "alt"]);
    if (!alt) {
        console.warn('Image is missing an alt attribute:', src);
    }
    return React.createElement(Image, Object.assign({ src: src, alt: alt }, props, { className: 'thumbnail-image' }));
};
export const SmallThumbnail = (_a) => {
    var { src, alt } = _a, props = __rest(_a, ["src", "alt"]);
    if (!alt) {
        console.warn('Image is missing an alt attribute:', src);
    }
    return React.createElement(Image, Object.assign({ src: src, alt: alt }, props, { className: 'small-thumbnail-image' }));
};
//# sourceMappingURL=Image.js.map