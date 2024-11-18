import React, { Children, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
export const CustomTabs = ({ titles, children }) => {
    const [currentTab, setCurrentTab] = useState('0');
    return React.createElement(Tabs, { defaultActiveKey: '0', className: "mb-3", onSelect: setCurrentTab }, Children.map(children, (single, index) => React.createElement(Tab, { key: titles[index], eventKey: String(index), title: titles[index] }, currentTab === String(index) && single)));
};
//# sourceMappingURL=CustomTabs.js.map