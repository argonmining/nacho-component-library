import React from 'react';
import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
export const LinkWithTooltip = ({ to, tooltip, children, ...props }) => (React.createElement(OverlayTrigger, { placement: "top", overlay: React.createElement(Tooltip, null, tooltip) },
    React.createElement(Link, { to: to, ...props }, children)));
//# sourceMappingURL=LinkWithTooltip.js.map