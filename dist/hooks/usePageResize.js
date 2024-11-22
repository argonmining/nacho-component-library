import { useCallback, useEffect, useState } from "react";
import { useMobile } from "./mobile";
export var usePageResize = function (element, type) {
    var isMobile = useMobile().isMobile;
    var _a = useState({}), styling = _a[0], setStyling = _a[1];
    var calculate = useCallback(function () {
        var _a, _b, _c;
        if (element === null || element.current === null) {
            return;
        }
        if (type === 'mainContent') {
            if (isMobile) {
                setStyling({
                    height: "".concat(document.body.clientHeight - ((_a = element.current.clientHeight) !== null && _a !== void 0 ? _a : 82), "px"),
                    width: "".concat(document.body.clientWidth, "px")
                });
                return;
            }
            setStyling({
                width: "".concat(document.body.clientWidth - ((_b = element.current.clientWidth) !== null && _b !== void 0 ? _b : 250), "px"),
                height: "".concat(document.body.clientHeight, "px")
            });
            return;
        }
        setStyling({
            height: "calc(100% - ".concat((_c = element.current.clientHeight) !== null && _c !== void 0 ? _c : 100, "px)")
        });
    }, [element, isMobile, type]);
    useEffect(function () {
        calculate();
        window.addEventListener('resize', calculate);
        return function () { return window.removeEventListener('resize', calculate); };
    }, [calculate]);
    return styling;
};
