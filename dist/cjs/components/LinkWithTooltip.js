"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkWithTooltip = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_bootstrap_1 = require("react-bootstrap");
const LinkWithTooltip = (_a) => {
    var { to, tooltip, children } = _a, props = __rest(_a, ["to", "tooltip", "children"]);
    return (react_1.default.createElement(react_bootstrap_1.OverlayTrigger, { placement: "top", overlay: react_1.default.createElement(react_bootstrap_1.Tooltip, null, tooltip) },
        react_1.default.createElement(react_router_dom_1.Link, Object.assign({ to: to }, props), children)));
};
exports.LinkWithTooltip = LinkWithTooltip;
//# sourceMappingURL=LinkWithTooltip.js.map