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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpandAbleList = void 0;
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const fa_1 = require("react-icons/fa");
const LoadingSpinner_1 = require("./LoadingSpinner");
const lodash_1 = require("lodash");
const ExpandAbleList = ({ isLoading, headEntries, entries, getRowData, getExpandData, props }) => {
    return react_1.default.createElement(react_bootstrap_1.Table, Object.assign({}, props),
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null, headEntries.map(single => react_1.default.createElement("th", { key: single }, single)))),
        react_1.default.createElement("tbody", null,
            isLoading && react_1.default.createElement("tr", null,
                react_1.default.createElement("td", { colSpan: 4 },
                    react_1.default.createElement(LoadingSpinner_1.LoadingSpinner, null))),
            entries.map((single, index) => react_1.default.createElement(ExpandAbleRow, { key: index, entry: single, index: index, getRowData: getRowData, getExpandData: getExpandData }))));
};
exports.ExpandAbleList = ExpandAbleList;
const ExpandAbleRow = ({ entry, index, getRowData, getExpandData }) => {
    const [isExpanded, setIsExpanded] = (0, react_1.useState)(false);
    const changeView = (0, lodash_1.debounce)(() => setIsExpanded(current => !current), 10);
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("tr", null,
            getRowData(entry, index),
            react_1.default.createElement("td", null,
                react_1.default.createElement(react_bootstrap_1.Button, { variant: "link", onClick: changeView, "aria-expanded": isExpanded },
                    isExpanded ? 'Hide Tokens' : 'Show Tokens',
                    isExpanded ? react_1.default.createElement(fa_1.FaChevronUp, { className: "ml-1" }) :
                        react_1.default.createElement(fa_1.FaChevronDown, { className: "ml-1" })))),
        isExpanded && react_1.default.createElement("tr", null, getExpandData(entry, index)));
};
//# sourceMappingURL=ExpandAbleList.js.map