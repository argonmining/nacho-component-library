import React, { createContext, useContext, useEffect, useState } from "react";
var MobileContext = createContext({
    isMobile: false
});
export var MobileProvider = function (_a) {
    var children = _a.children;
    var _b = useState(window.innerWidth <= 768), isMobile = _b[0], setIsMobile = _b[1];
    useEffect(function () {
        var handleResize = function () {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    return React.createElement(MobileContext.Provider, { value: { isMobile: isMobile } }, children);
};
export var useMobile = function () {
    var isMobile = useContext(MobileContext).isMobile;
    return { isMobile: isMobile };
};
