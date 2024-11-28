import React, { useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { createPortal } from "react-dom";
import './CustomDropdown.css';
export var CustomDropdown = function (_a) {
    var _b, _c;
    var title = _a.title, className = _a.className, children = _a.children;
    var _d = useState(false), showLaunchTypeDropdown = _d[0], setShowLaunchTypeDropdown = _d[1];
    var container = document.getElementById('portal-container');
    var dRef = useRef(null);
    if (container === null) {
        return null;
    }
    return React.createElement(Dropdown, { show: showLaunchTypeDropdown, className: "custom-dropdown ".concat(className !== null && className !== void 0 ? className : ''), ref: dRef, onToggle: function () { return setShowLaunchTypeDropdown(!showLaunchTypeDropdown); } },
        React.createElement(Dropdown.Toggle, { as: "div", className: "dropdown-header" }, title),
        showLaunchTypeDropdown
            ? createPortal(React.createElement("div", { style: { position: 'relative', width: 0, height: 0 } },
                React.createElement("div", { style: {
                        position: "absolute",
                        left: (_b = dRef.current) === null || _b === void 0 ? void 0 : _b.clientLeft,
                        top: (_c = dRef.current) === null || _c === void 0 ? void 0 : _c.clientTop
                    }, className: "custom-dropdown ".concat(className !== null && className !== void 0 ? className : '') },
                    React.createElement(Dropdown.Menu, null, children))), container)
            : null);
};
