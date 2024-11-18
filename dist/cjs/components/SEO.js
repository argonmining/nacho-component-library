"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEO = void 0;
const react_1 = __importDefault(require("react"));
const react_helmet_async_1 = require("react-helmet-async");
const SEO = ({ title, description, keywords, canonicalUrl }) => {
    const fullTitle = `${title} | KatScan - KRC-20 Explorer for Kaspa`;
    return (react_1.default.createElement(react_helmet_async_1.Helmet, null,
        react_1.default.createElement("title", null, fullTitle),
        react_1.default.createElement("meta", { name: "description", content: description }),
        react_1.default.createElement("meta", { name: "keywords", content: keywords }),
        canonicalUrl && react_1.default.createElement("link", { rel: "canonical", href: canonicalUrl })));
};
exports.SEO = SEO;
//# sourceMappingURL=SEO.js.map