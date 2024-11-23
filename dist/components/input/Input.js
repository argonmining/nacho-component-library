import React, { useCallback, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { debounce } from "lodash";
import './Input.css';
export var Input = function (_a) {
    var placeholder = _a.placeholder, value = _a.value, onChangeCallback = _a.onChangeCallback, onSubmit = _a.onSubmit, debounced = _a.debounced, customClass = _a.customClass;
    var _b = useState(value !== null && value !== void 0 ? value : ''), valueInternal = _b[0], setValueInternal = _b[1];
    var onChangeCallbackInternal = useCallback(function (internalVal) {
        onChangeCallback === null || onChangeCallback === void 0 ? void 0 : onChangeCallback(internalVal);
    }, [onChangeCallback]);
    var onChangeDebounced = debounce(onChangeCallbackInternal, 500);
    useEffect(function () {
        if (onChangeCallback === undefined || value === valueInternal) {
            return;
        }
        if (debounced) {
            onChangeDebounced(valueInternal);
            return;
        }
        onChangeCallback(valueInternal);
    }, [debounced, onChangeCallback, onChangeDebounced, value, valueInternal]);
    var handleAddressChangeInternal = function (e) {
        setValueInternal(e.target.value);
    };
    var onSubmitInternal = function (e) {
        e.preventDefault();
        onSubmit(valueInternal);
    };
    return React.createElement(React.Fragment, null,
        React.createElement(Form, { className: "custom-input ".concat(customClass !== null && customClass !== void 0 ? customClass : ''), onSubmit: onSubmitInternal },
            React.createElement(InputGroup, null,
                React.createElement(Form.Control, { type: "text", placeholder: placeholder, value: valueInternal, onChange: handleAddressChangeInternal }),
                React.createElement(Button, { variant: "primary", type: "submit" },
                    React.createElement(FaSearch, null),
                    " Search"))));
};
