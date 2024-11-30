import { useEffect } from "react";
export var useClickOutside = function (element, handler, alternate, condition) {
    useEffect(function () {
        var callback = function (e) {
            if (!(element === null || element === void 0 ? void 0 : element.contains(e.target)) &&
                (alternate !== undefined && !(alternate === e.target || (alternate === null || alternate === void 0 ? void 0 : alternate.contains(e.target))))) {
                handler(e);
            }
        };
        if (condition && element !== null && (alternate === undefined || alternate !== null)) {
            document.addEventListener('mousedown', callback);
            document.addEventListener('touchstart', callback);
        }
        return function () {
            document.removeEventListener('mousedown', callback);
            document.removeEventListener('touchstart', callback);
        };
    }, [alternate, condition, handler, element]);
};
