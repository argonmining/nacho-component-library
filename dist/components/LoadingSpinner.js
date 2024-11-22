import React from "react";
import { Spinner } from "react-bootstrap";
export const LoadingSpinner = ({ useFlexHeight = false }) => {
    return React.createElement("div", { style: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...(useFlexHeight ? { flex: 1 } : { height: '100%' })
        } },
        React.createElement(Spinner, { animation: "border", role: "status" },
            React.createElement("span", { className: "visually-hidden" }, "Loading...")));
};
//# sourceMappingURL=LoadingSpinner.js.map