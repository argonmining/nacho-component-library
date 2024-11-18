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
import React from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
export const LinkWithTooltip = (_a) => {
    var { to, tooltip, children } = _a, props = __rest(_a, ["to", "tooltip", "children"]);
    return (React.createElement(OverlayTrigger, { placement: "top", overlay: React.createElement(Tooltip, null, tooltip) },
        React.createElement(Link, Object.assign({ to: to }, props), children)));
};
//# sourceMappingURL=LinkWithTooltip.js.map