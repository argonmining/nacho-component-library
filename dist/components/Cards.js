import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { Children, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { debounce } from "lodash";
export const FeatureCard = ({ title, icon, link }) => (React.createElement(Col, { xs: 4, className: "mb-2" },
    React.createElement(Card, { className: "feature-card h-100", as: Link, to: link },
        React.createElement(Card.Body, { className: "d-flex flex-column align-items-center justify-content-center p-2" },
            icon,
            React.createElement(Card.Title, { className: "mt-1 text-center small" }, title)))));
export const StatCard = ({ title, value, icon }) => (React.createElement(Col, { xs: 12, md: 4, className: "mb-2" },
    React.createElement(Card, { className: "stat-card h-100" },
        React.createElement(Card.Body, { className: "d-flex flex-column align-items-center justify-content-center p-2" },
            icon,
            React.createElement("h3", { className: "mt-1 mb-0" }, value),
            React.createElement(Card.Text, { className: "text-center small" }, title)))));
export const NormalCard = ({ title, titleProps, textProps, children }) => {
    return (React.createElement(Card, null,
        React.createElement(Card.Body, null,
            React.createElement(Card.Title, { ...titleProps }, title),
            React.createElement(Card.Text, { as: 'div', ...textProps }, children))));
};
export const CollapseAbleCard = ({ children, ...props }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const changeView = debounce(() => setIsCollapsed(current => !current), 50);
    return React.createElement(Card, { ...props },
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
export const ExpandableCard = ({ children, ...props }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const changeView = debounce(() => setIsExpanded(current => !current), 50);
    return React.createElement(Card, { ...props },
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
//# sourceMappingURL=Cards.js.map