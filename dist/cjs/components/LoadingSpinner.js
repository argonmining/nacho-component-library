"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingSpinner = void 0;
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const LoadingSpinner = ({ useFlexHeight = false }) => {
    return react_1.default.createElement("div", { style: Object.assign({ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }, (useFlexHeight ? { flex: 1 } : { height: '100%' })) },
        react_1.default.createElement(react_bootstrap_1.Spinner, { animation: "border", role: "status" },
            react_1.default.createElement("span", { className: "visually-hidden" }, "Loading...")));
};
exports.LoadingSpinner = LoadingSpinner;
//# sourceMappingURL=LoadingSpinner.js.map