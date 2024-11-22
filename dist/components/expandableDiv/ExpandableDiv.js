import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './ExpandableDiv.css';
export var ExpandableDiv = function (_a) {
    var title = _a.title, children = _a.children;
    var _b = useState(), isExtended = _b[0], setIsExtended = _b[1];
    return React.createElement("div", { className: 'expandable-div' },
        React.createElement("div", { className: "expandable-div-header ".concat(isExtended ? 'extended' : ''), onClick: function () { return setIsExtended(function (current) { return !current; }); } },
            title && typeof title === 'object' ? title : React.createElement("span", null, title),
            isExtended ? React.createElement(FaChevronUp, null) : React.createElement(FaChevronDown, null)),
        isExtended && React.createElement("div", { className: 'expandable-div-body' }, children));
};
