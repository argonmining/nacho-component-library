import React from 'react';
import './DivChart.css';
export var DivChart = function (_a) {
    var data = _a.data, groupLabel = _a.groupLabel;
    return React.createElement("div", { className: "div-chart" },
        React.createElement("table", { className: "table table-striped" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, groupLabel),
                    React.createElement("th", null, "Percentage"))),
            React.createElement("tbody", null, data.map(function (item, index) { return (React.createElement("tr", { key: index, style: { position: 'relative' } },
                React.createElement("td", null, item.label),
                React.createElement("td", null,
                    item.percentage.toFixed(2),
                    "%"),
                React.createElement("div", { style: {
                        left: 0,
                        top: 0,
                        height: '100%',
                        position: 'absolute',
                        padding: 0,
                        width: "".concat(Number(item.percentage), "%")
                    }, className: "chart-overlay" }))); }))));
};
