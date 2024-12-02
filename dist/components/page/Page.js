import React, { useRef } from "react";
import { usePageResize } from "../../hooks";
import './Page.css';
export var Page = function (_a) {
    var header = _a.header, additionalHeaderInfo = _a.additionalHeaderInfo, additionalHeaderComponent = _a.additionalHeaderComponent, children = _a.children;
    var ref = useRef(null);
    var styling = usePageResize(ref, 'pageContent');
    return React.createElement("div", { style: { width: '100%', height: '100%' }, className: 'page' },
        React.createElement("div", { ref: ref, className: 'page-header' },
            React.createElement("h1", null, header),
            additionalHeaderInfo && React.createElement("span", null, additionalHeaderInfo),
            additionalHeaderComponent),
        React.createElement("div", { className: 'page-content', style: styling }, children));
};
