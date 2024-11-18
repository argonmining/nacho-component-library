import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './ExpandableDiv.css';
export const ExpandableDiv = ({ title, children }) => {
    const [isExtended, setIsExtended] = useState();
    return React.createElement("div", { className: 'expandable-div' },
        React.createElement("div", { className: `expandable-div-header ${isExtended ? 'extended' : ''}`, onClick: () => setIsExtended(current => !current) },
            title && typeof title === 'object' ? title : React.createElement("span", null, title),
            isExtended ? React.createElement(FaChevronUp, null) : React.createElement(FaChevronDown, null)),
        isExtended && React.createElement("div", { className: 'expandable-div-body' }, children));
};
//# sourceMappingURL=ExpandableDiv.js.map