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
import React, { Children, forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "../../hooks/useClickOutside";
import './CustomDropdown.css';
export var CustomDropdown = forwardRef(function CustomDropdown(_a, ref) {
    var _b;
    var title = _a.title, _c = _a.menuTheme, menuTheme = _c === void 0 ? 'normal' : _c, containerId = _a.containerId, className = _a.className, _d = _a.offsetY, offsetY = _d === void 0 ? 0 : _d, _e = _a.offsetX, offsetX = _e === void 0 ? 0 : _e, _f = _a.alwaysUp, alwaysUp = _f === void 0 ? false : _f, _g = _a.stayOpen, stayOpen = _g === void 0 ? false : _g, fitHeader = _a.fitHeader, onOpen = _a.onOpen, children = _a.children;
    var _h = useState(false), showDropdown = _h[0], setShowDropdown = _h[1];
    var container = useMemo(function () {
        if (showDropdown) {
            return document.getElementById(containerId !== null && containerId !== void 0 ? containerId : 'portal-container');
        }
        return null;
    }, [containerId, showDropdown]);
    var _j = useState(null), menu = _j[0], setMenu = _j[1];
    var dRef = useRef(null);
    var callback = useCallback(function () { return setShowDropdown(false); }, []);
    useClickOutside(menu, callback, dRef.current, showDropdown);
    useEffect(function () {
        if (showDropdown && onOpen) {
            onOpen();
        }
    }, [onOpen, showDropdown]);
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
        if (display.height < top + height || alwaysUp) {
            style.top = top - height - spacing;
        }
        if (offsetX !== 0 || offsetY !== 0) {
            style.top = style.top + offsetY;
            style.left = style.left + offsetX;
        }
        return style;
    }, [showDropdown, menu, alwaysUp, offsetX, offsetY]);
    useImperativeHandle(ref, function () { return ({
        close: function () {
            setShowDropdown(false);
        }
    }); }, []);
    return React.createElement("div", { className: "custom-dropdown ".concat(className !== null && className !== void 0 ? className : ''), ref: dRef, onClick: stayOpen ? function () { return setShowDropdown(true); } : function () { return setShowDropdown(function (current) { return !current; }); } },
        React.createElement("div", { className: "custom-dropdown-header" }, title),
        showDropdown && container && Children.count(children) !== 0
            ? createPortal(React.createElement("div", { style: { position: 'relative', width: 0, height: 0 } },
                React.createElement("div", { style: __assign({ position: "absolute" }, styling), className: "custom-dropdown theme-".concat(menuTheme, " ").concat(className !== null && className !== void 0 ? className : '') },
                    React.createElement("div", { className: 'custom-dropdown-menu', style: { width: fitHeader ? "".concat((_b = dRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth, "px") : undefined }, ref: function (ref) { return setMenu(ref); } }, children))), container)
            : null);
});
export var CustomDropdownItem = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    return React.createElement("div", { onClick: onClick, className: 'custom-dropdown-item' }, children);
};
