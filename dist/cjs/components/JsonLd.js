"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonLd = void 0;
const react_1 = __importDefault(require("react"));
const react_helmet_async_1 = require("react-helmet-async");
const JsonLd = ({ data }) => (react_1.default.createElement(react_helmet_async_1.Helmet, null,
    react_1.default.createElement("script", { type: "application/ld+json" }, JSON.stringify(data))));
exports.JsonLd = JsonLd;
//# sourceMappingURL=JsonLd.js.map