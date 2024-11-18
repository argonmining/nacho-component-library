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
exports.ExpandableCard = exports.CollapseAbleCard = exports.NormalCard = exports.StatCard = exports.FeatureCard = void 0;
const react_bootstrap_1 = require("react-bootstrap");
const react_router_dom_1 = require("react-router-dom");
const react_1 = __importStar(require("react"));
const fa_1 = require("react-icons/fa");
const lodash_1 = require("lodash");
const FeatureCard = ({ title, icon, link }) => (react_1.default.createElement(react_bootstrap_1.Col, { xs: 4, className: "mb-2" },
    react_1.default.createElement(react_bootstrap_1.Card, { className: "feature-card h-100", as: react_router_dom_1.Link, to: link },
        react_1.default.createElement(react_bootstrap_1.Card.Body, { className: "d-flex flex-column align-items-center justify-content-center p-2" },
            icon,
            react_1.default.createElement(react_bootstrap_1.Card.Title, { className: "mt-1 text-center small" }, title)))));
exports.FeatureCard = FeatureCard;
const StatCard = ({ title, value, icon }) => (react_1.default.createElement(react_bootstrap_1.Col, { xs: 12, md: 4, className: "mb-2" },
    react_1.default.createElement(react_bootstrap_1.Card, { className: "stat-card h-100" },
        react_1.default.createElement(react_bootstrap_1.Card.Body, { className: "d-flex flex-column align-items-center justify-content-center p-2" },
            icon,
            react_1.default.createElement("h3", { className: "mt-1 mb-0" }, value),
            react_1.default.createElement(react_bootstrap_1.Card.Text, { className: "text-center small" }, title)))));
exports.StatCard = StatCard;
const NormalCard = ({ title, titleProps, textProps, children }) => {
    return (react_1.default.createElement(react_bootstrap_1.Card, null,
        react_1.default.createElement(react_bootstrap_1.Card.Body, null,
            react_1.default.createElement(react_bootstrap_1.Card.Title, Object.assign({}, titleProps), title),
            react_1.default.createElement(react_bootstrap_1.Card.Text, Object.assign({ as: 'div' }, textProps), children))));
};
exports.NormalCard = NormalCard;
const CollapseAbleCard = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const [isCollapsed, setIsCollapsed] = (0, react_1.useState)(false);
    const changeView = (0, lodash_1.debounce)(() => setIsCollapsed(current => !current), 50);
    return react_1.default.createElement(react_bootstrap_1.Card, Object.assign({}, props),
        react_1.default.createElement(react_bootstrap_1.Card.Body, null,
            react_1.Children.toArray(children)[0],
            react_1.default.createElement(react_bootstrap_1.Button, { variant: "link", onClick: changeView, "aria-expanded": !isCollapsed, className: "mt-2 p-0" },
                isCollapsed
                    ? 'Show Tokens'
                    : 'Hide Tokens',
                isCollapsed
                    ? react_1.default.createElement(fa_1.FaChevronDown, { className: "ml-1" })
                    : react_1.default.createElement(fa_1.FaChevronUp, { className: "ml-1" })),
            !isCollapsed && react_1.Children.toArray(children)[1]));
};
exports.CollapseAbleCard = CollapseAbleCard;
const ExpandableCard = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const [isExpanded, setIsExpanded] = (0, react_1.useState)(false);
    const changeView = (0, lodash_1.debounce)(() => setIsExpanded(current => !current), 50);
    return react_1.default.createElement(react_bootstrap_1.Card, Object.assign({}, props),
        react_1.default.createElement(react_bootstrap_1.Card.Body, null,
            react_1.Children.toArray(children)[0],
            react_1.default.createElement(react_bootstrap_1.Button, { variant: "link", onClick: changeView, "aria-expanded": isExpanded, className: "mt-2 p-0" },
                isExpanded
                    ? 'Show Tokens'
                    : 'Hide Tokens',
                isExpanded
                    ? react_1.default.createElement(fa_1.FaChevronDown, { className: "ml-1" })
                    : react_1.default.createElement(fa_1.FaChevronUp, { className: "ml-1" })),
            isExpanded && react_1.Children.toArray(children)[1]));
};
exports.ExpandableCard = ExpandableCard;
//# sourceMappingURL=Cards.js.map