import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { LoadingSpinner } from "./LoadingSpinner";
import { debounce } from "lodash";
export const ExpandAbleList = ({ isLoading, headEntries, entries, getRowData, getExpandData, props }) => {
    return React.createElement(Table, { ...props },
        React.createElement("thead", null,
            React.createElement("tr", null, headEntries.map(single => React.createElement("th", { key: single }, single)))),
        React.createElement("tbody", null,
            isLoading && React.createElement("tr", null,
                React.createElement("td", { colSpan: 4 },
                    React.createElement(LoadingSpinner, null))),
            entries.map((single, index) => React.createElement(ExpandAbleRow, { key: index, entry: single, index: index, getRowData: getRowData, getExpandData: getExpandData }))));
};
const ExpandAbleRow = ({ entry, index, getRowData, getExpandData }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const changeView = debounce(() => setIsExpanded(current => !current), 10);
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
//# sourceMappingURL=ExpandAbleList.js.map