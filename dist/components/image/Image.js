var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
export var Image = function (_a) {
    var _b;
    var src = _a.src, alt = _a.alt, props = __rest(_a, ["src", "alt"]);
    var _c = useState(false), finished = _c[0], setFinished = _c[1];
    var _d = useState(false), returnNull = _d[0], setReturnNull = _d[1];
    if (!alt) {
        console.warn('Image is missing an alt attribute:', src);
    }
    if (returnNull) {
        return null;
    }
    return React.createElement("img", __assign({ style: __assign({ visibility: finished ? 'visible' : 'hidden' }, ((_b = props.style) !== null && _b !== void 0 ? _b : {})), src: src, alt: alt, onError: function () { return setReturnNull(true); }, onLoad: function () { return setFinished(true); } }, props));
};
export var Thumbnail = function (_a) {
    var src = _a.src, alt = _a.alt, props = __rest(_a, ["src", "alt"]);
    if (!alt) {
        console.warn('Image is missing an alt attribute:', src);
    }
    return React.createElement(Image, __assign({ src: src, alt: alt }, props, { className: 'thumbnail-image' }));
};
export var SmallThumbnail = function (_a) {
    var src = _a.src, alt = _a.alt, props = __rest(_a, ["src", "alt"]);
    if (!alt) {
        console.warn('Image is missing an alt attribute:', src);
    }
    return React.createElement(Image, __assign({ src: src, alt: alt }, props, { className: 'small-thumbnail-image' }));
};
