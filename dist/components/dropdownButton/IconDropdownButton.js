import React from 'react';
import { CustomDropdown } from "../customDropdown/CustomDropdown";
import './DropdownButton.css';
export var IconDropdownButton = function (_a) {
    var title = _a.title, theme = _a.theme, children = _a.children;
    return React.createElement(CustomDropdown, { className: "icon-dropdown-button", title: title !== null && title !== void 0 ? title : React.createElement(React.Fragment, null), theme: theme }, children);
};
