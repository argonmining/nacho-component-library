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
exports.CustomTabs = void 0;
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const CustomTabs = ({ titles, children }) => {
    const [currentTab, setCurrentTab] = (0, react_1.useState)('0');
    return react_1.default.createElement(react_bootstrap_1.Tabs, { defaultActiveKey: '0', className: "mb-3", onSelect: setCurrentTab }, react_1.Children.map(children, (single, index) => react_1.default.createElement(react_bootstrap_1.Tab, { key: titles[index], eventKey: String(index), title: titles[index] }, currentTab === String(index) && single)));
};
exports.CustomTabs = CustomTabs;
//# sourceMappingURL=CustomTabs.js.map