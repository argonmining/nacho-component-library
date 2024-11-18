"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivChart = void 0;
const react_1 = __importDefault(require("react"));
require("./DivChart.css");
const DivChart = ({ data, groupLabel }) => {
    return react_1.default.createElement("div", { className: "div-chart" },
        react_1.default.createElement("table", { className: "table table-striped" },
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("th", null, groupLabel),
                    react_1.default.createElement("th", null, "Percentage"))),
            react_1.default.createElement("tbody", null, data.map((item, index) => (react_1.default.createElement("tr", { key: index, style: { position: 'relative' } },
                react_1.default.createElement("td", null, item.label),
                react_1.default.createElement("td", null,
                    item.percentage.toFixed(2),
                    "%"),
                react_1.default.createElement("div", { style: {
                        left: 0,
                        top: 0,
                        height: '100%',
                        position: 'absolute',
                        padding: 0,
                        width: `${Number(item.percentage)}%`
                    }, className: "chart-overlay" })))))));
};
exports.DivChart = DivChart;
//# sourceMappingURL=DivChart.js.map