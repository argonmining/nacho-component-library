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
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { Children, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { debounce } from "lodash";
export var FeatureCard = function (_a) {
    var title = _a.title, icon = _a.icon, link = _a.link;
    return (React.createElement(Col, { xs: 4, className: "mb-2" },
        React.createElement(Card, { className: "feature-card h-100", as: Link, to: link },
            React.createElement(Card.Body, { className: "d-flex flex-column align-items-center justify-content-center p-2" },
                icon,
                React.createElement(Card.Title, { className: "mt-1 text-center small" }, title)))));
};
export var StatCard = function (_a) {
    var title = _a.title, value = _a.value, icon = _a.icon;
    return (React.createElement(Col, { xs: 12, md: 4, className: "mb-2" },
        React.createElement(Card, { className: "stat-card h-100" },
            React.createElement(Card.Body, { className: "d-flex flex-column align-items-center justify-content-center p-2" },
                icon,
                React.createElement("h3", { className: "mt-1 mb-0" }, value),
                React.createElement(Card.Text, { className: "text-center small" }, title)))));
};
export var NormalCard = function (_a) {
    var title = _a.title, titleProps = _a.titleProps, textProps = _a.textProps, children = _a.children;
    return (React.createElement(Card, null,
        React.createElement(Card.Body, null,
            React.createElement(Card.Title, __assign({}, titleProps), title),
            React.createElement(Card.Text, __assign({ as: 'div' }, textProps), children))));
};
export var CollapseAbleCard = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var _b = useState(false), isCollapsed = _b[0], setIsCollapsed = _b[1];
    var changeView = debounce(function () { return setIsCollapsed(function (current) { return !current; }); }, 50);
    return React.createElement(Card, __assign({}, props),
        React.createElement(Card.Body, null,
            Children.toArray(children)[0],
            React.createElement(Button, { variant: "link", onClick: changeView, "aria-expanded": !isCollapsed, className: "mt-2 p-0" },
                isCollapsed
                    ? 'Show Tokens'
                    : 'Hide Tokens',
                isCollapsed
                    ? React.createElement(FaChevronDown, { className: "ml-1" })
                    : React.createElement(FaChevronUp, { className: "ml-1" })),
            !isCollapsed && Children.toArray(children)[1]));
};
export var ExpandableCard = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var _b = useState(false), isExpanded = _b[0], setIsExpanded = _b[1];
    var changeView = debounce(function () { return setIsExpanded(function (current) { return !current; }); }, 50);
    return React.createElement(Card, __assign({}, props),
        React.createElement(Card.Body, null,
            Children.toArray(children)[0],
            React.createElement(Button, { variant: "link", onClick: changeView, "aria-expanded": isExpanded, className: "mt-2 p-0" },
                isExpanded
                    ? 'Show Tokens'
                    : 'Hide Tokens',
                isExpanded
                    ? React.createElement(FaChevronDown, { className: "ml-1" })
                    : React.createElement(FaChevronUp, { className: "ml-1" })),
            isExpanded && Children.toArray(children)[1]));
};
