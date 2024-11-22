import React, { Children, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
var CustomTabs_old = function (_a) {
    var titles = _a.titles, children = _a.children;
    var _b = useState('0'), currentTab = _b[0], setCurrentTab = _b[1];
    return React.createElement(Tabs, { defaultActiveKey: '0', className: "mb-3", onSelect: setCurrentTab }, Children.map(children, function (single, index) {
        return React.createElement(Tab, { key: titles[index], eventKey: String(index), title: titles[index] }, currentTab === String(index) && single);
    }));
};
