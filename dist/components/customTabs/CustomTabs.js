import React, { Children, useEffect, useState } from "react";
import './CustomTabs.css';
export var CustomTabs = function (_a) {
    var titles = _a.titles, customClassname = _a.customClassname, children = _a.children;
    var _b = useState(0), currentTab = _b[0], setCurrentTab = _b[1];
    var _c = useState(50), headerHeight = _c[0], setHeaderHeight = _c[1];
    useEffect(function () {
        var _a, _b;
        var margin = 1.5 * 16;
        setHeaderHeight(((_b = (_a = document.getElementById('custom-tab-header')) === null || _a === void 0 ? void 0 : _a.clientHeight) !== null && _b !== void 0 ? _b : 50) + margin);
    }, []);
    return React.createElement("div", { className: "custom-tabs ".concat(customClassname !== null && customClassname !== void 0 ? customClassname : '') },
        React.createElement("div", { id: 'custom-tab-header', className: 'custom-tabs-header' }, titles.map(function (single, index) {
            return React.createElement("div", { key: single, onClick: function () { return setCurrentTab(index); }, className: "custom-tabs-header-child ".concat(currentTab === index ? 'active' : '') },
                React.createElement("span", null, single));
        })),
        React.createElement("div", { className: 'custom-tabs-content', style: { height: "calc(100% - ".concat(headerHeight, "px)") } }, Children.toArray(children)[currentTab]));
};
