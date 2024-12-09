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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './ExpandableDiv.css';
import { uniqueId } from "lodash";
export var ExpandableDiv = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var _b = useState(false), isExtended = _b[0], setIsExtended = _b[1];
    var id = useRef(uniqueId()).current;
    return React.createElement(ControlledExpandableDiv, __assign({ changeExtended: function () { return setIsExtended(function (current) { return !current; }); }, isExtended: isExtended, id: id }, props), children);
};
export var ControlledExpandableDiv = function (_a) {
    var title = _a.title, id = _a.id, icon = _a.icon, isExtended = _a.isExtended, changeExtended = _a.changeExtended, children = _a.children;
    return React.createElement("div", { className: 'expandable-div' },
        React.createElement("div", { className: "expandable-div-header ".concat(isExtended ? 'extended' : ''), onClick: function () { return changeExtended(id); } },
            icon,
            title && typeof title === 'object' ? title : React.createElement("span", null, title),
            isExtended ? React.createElement(FaChevronUp, null) : React.createElement(FaChevronDown, null)),
        React.createElement("div", { className: "expandable-div-body ".concat(isExtended ? 'extended' : '') }, isExtended && children));
};
