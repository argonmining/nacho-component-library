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
import React, { useCallback, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import './CustomDropdown.css';
import { useClickOutside } from "../../hooks/useClickOutside";
export var CustomDropdown = function (_a) {
    var title = _a.title, containerId = _a.containerId, className = _a.className, children = _a.children;
    var _b = useState(false), showDropdown = _b[0], setShowDropdown = _b[1];
    var container = useMemo(function () {
        if (showDropdown) {
            return document.getElementById(containerId !== null && containerId !== void 0 ? containerId : 'portal-container');
        }
        return null;
    }, [containerId, showDropdown]);
    var _c = useState(null), menu = _c[0], setMenu = _c[1];
    var dRef = useRef(null);
    var callback = useCallback(function () {
        setShowDropdown(false);
    }, []);
    useClickOutside(menu, callback, dRef.current, showDropdown);
    var styling = useMemo(function () {
        if (!showDropdown || dRef.current === null || menu === null) {
            return {
                left: 0,
                top: 0
            };
        }
        var spacing = 5;
        var _a = dRef.current.getBoundingClientRect(), left = _a.left, top = _a.top;
        var buttonHeight = dRef.current.getBoundingClientRect().height;
        var _b = menu.getBoundingClientRect(), width = _b.width, height = _b.height;
        var display = { width: window.innerWidth, height: window.innerHeight };
        var style = {
            left: left,
            top: top + buttonHeight + spacing
        };
        if (display.width < left + width) {
            style.left = display.width - width - spacing;
        }
        if (display.height < top + height) {
            style.top = top - height - spacing;
        }
        return style;
    }, [dRef, menu, showDropdown]);
    return React.createElement("div", { className: "custom-dropdown ".concat(className !== null && className !== void 0 ? className : ''), ref: dRef, onClick: function () { return setShowDropdown(function (current) { return !current; }); } },
        React.createElement("div", { className: "custom-dropdown-header" }, title),
        showDropdown && container
            ? createPortal(React.createElement("div", { style: { position: 'relative', width: 0, height: 0 } },
                React.createElement("div", { style: __assign({ position: "absolute" }, styling), className: "custom-dropdown ".concat(className !== null && className !== void 0 ? className : '') },
                    React.createElement("div", { className: 'custom-dropdown-menu', ref: function (ref) { return setMenu(ref); } }, children))), container)
            : null);
};
export var CustomDropdownItem = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    return React.createElement("div", { onClick: onClick, className: 'custom-dropdown-item' }, children);
};
