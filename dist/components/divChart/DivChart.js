import React from 'react';
import './DivChart.css';
export const DivChart = ({ data, groupLabel }) => {
    return React.createElement("div", { className: "div-chart" },
        React.createElement("table", { className: "table table-striped" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, groupLabel),
                    React.createElement("th", null, "Percentage"))),
            React.createElement("tbody", null, data.map((item, index) => (React.createElement("tr", { key: index, style: { position: 'relative' } },
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
                        width: `${Number(item.percentage)}%`
                    }, className: "chart-overlay" })))))));
};
//# sourceMappingURL=DivChart.js.map