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
import React from "react";
import { Spinner } from "react-bootstrap";
export var LoadingSpinner = function (_a) {
    var _b = _a.useFlexHeight, useFlexHeight = _b === void 0 ? false : _b;
    return React.createElement("div", { style: __assign({ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }, (useFlexHeight ? { flex: 1 } : { height: '100%' })) },
        React.createElement(Spinner, { animation: "border", role: "status" },
            React.createElement("span", { className: "visually-hidden" }, "Loading...")));
};
