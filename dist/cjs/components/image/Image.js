"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallThumbnail = exports.Thumbnail = exports.Image = void 0;
const react_1 = __importStar(require("react"));
require("./Image.css");
const Image = (_a) => {
    var _b;
    var { src, alt } = _a, props = __rest(_a, ["src", "alt"]);
    const [finished, setFinished] = (0, react_1.useState)(false);
    const [returnNull, setReturnNull] = (0, react_1.useState)(false);
    if (!alt) {
        console.warn('Image is missing an alt attribute:', src);
    }
    if (returnNull) {
        return null;
    }
    return react_1.default.createElement("img", Object.assign({ style: Object.assign({ visibility: finished ? 'visible' : 'hidden' }, ((_b = props.style) !== null && _b !== void 0 ? _b : {})), src: src, alt: alt, onError: () => setReturnNull(true), onLoad: () => setFinished(true) }, props));
};
exports.Image = Image;
const Thumbnail = (_a) => {
    var { src, alt } = _a, props = __rest(_a, ["src", "alt"]);
    if (!alt) {
        console.warn('Image is missing an alt attribute:', src);
    }
    return react_1.default.createElement(exports.Image, Object.assign({ src: src, alt: alt }, props, { className: 'thumbnail-image' }));
};
exports.Thumbnail = Thumbnail;
const SmallThumbnail = (_a) => {
    var { src, alt } = _a, props = __rest(_a, ["src", "alt"]);
    if (!alt) {
        console.warn('Image is missing an alt attribute:', src);
    }
    return react_1.default.createElement(exports.Image, Object.assign({ src: src, alt: alt }, props, { className: 'small-thumbnail-image' }));
};
exports.SmallThumbnail = SmallThumbnail;
//# sourceMappingURL=Image.js.map