var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { LoadingSpinner } from "./LoadingSpinner";
import { debounce } from "lodash";
export var ExpandAbleList = function (_a) {
    var isLoading = _a.isLoading, headEntries = _a.headEntries, entries = _a.entries, getRowData = _a.getRowData, getExpandData = _a.getExpandData, props = _a.props;
    return React.createElement(Table, __assign({}, props),
        React.createElement("thead", null,
            React.createElement("tr", null, headEntries.map(function (single) { return React.createElement("th", { key: single }, single); }))),
        React.createElement("tbody", null,
            isLoading && React.createElement("tr", null,
                React.createElement("td", { colSpan: 4 },
                    React.createElement(LoadingSpinner, null))),
            entries.map(function (single, index) { return React.createElement(ExpandAbleRow, { key: index, entry: single, index: index, getRowData: getRowData, getExpandData: getExpandData }); })));
};
var ExpandAbleRow = function (_a) {
    var entry = _a.entry, index = _a.index, getRowData = _a.getRowData, getExpandData = _a.getExpandData;
    var _b = useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var changeView = debounce(function () { return setIsExpanded(function (current) { return !current; }); }, 10);
    return React.createElement(React.Fragment, null,
        React.createElement("tr", null,
            getRowData(entry, index),
            React.createElement("td", null,
                React.createElement(Button, { variant: "link", onClick: changeView, "aria-expanded": isExpanded },
                    isExpanded ? 'Hide Tokens' : 'Show Tokens',
                    isExpanded ? React.createElement(FaChevronUp, { className: "ml-1" }) :
                        React.createElement(FaChevronDown, { className: "ml-1" })))),
        isExpanded && React.createElement("tr", null, getExpandData(entry, index)));
};
