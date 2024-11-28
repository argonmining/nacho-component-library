import React, { useCallback, useMemo, useRef, useState } from "react";
import './List.css';
import { LoadingSpinner } from "../LoadingSpinner";
var puffer = 10;
export var List = function (_a) {
    var _b, _c, _d, _e;
    var headerElements = _a.headerElements, getHeader = _a.getHeader, items = _a.items, itemHeight = _a.itemHeight, gridTemplate = _a.gridTemplate, getRow = _a.getRow, getElement = _a.getElement, isLoading = _a.isLoading, cssGrid = _a.cssGrid;
    var containerRef = useRef(null);
    var headerRef = useRef(null);
    var _f = useState(0), scrollTop = _f[0], setScrollTop = _f[1];
    var startIndex = Math.max(Math.floor(scrollTop / itemHeight) - puffer, 0);
    var endIndex = Math.min(startIndex + Math.ceil((scrollTop + ((_c = (_b = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight) !== null && _c !== void 0 ? _c : 200)) / itemHeight) + puffer, items.length - 1);
    var visibleItems = items.slice(startIndex, endIndex + 1);
    var gridTemplateInternal = useMemo(function () {
        if (cssGrid) {
            return;
        }
        if (gridTemplate) {
            return gridTemplate.map(function (single) { return "".concat(single, "px"); }).join(" ");
        }
        return headerElements.map(function () { return '1fr'; }).join(" ");
    }, [cssGrid, gridTemplate, headerElements]);
    var handleScroll = function (e) {
        var _a, _b, _c, _d, _e;
        if (((_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.scrollTop) !== undefined && ((_b = e.currentTarget) === null || _b === void 0 ? void 0 : _b.scrollTop) !== 0) {
            setScrollTop(e.currentTarget.scrollTop);
        }
        if (((_c = e.currentTarget) === null || _c === void 0 ? void 0 : _c.scrollLeft) !== undefined && ((_d = e.currentTarget) === null || _d === void 0 ? void 0 : _d.scrollLeft) !== 0) {
            (_e = headerRef.current) === null || _e === void 0 ? void 0 : _e.scrollTo(e.currentTarget.scrollLeft, 0);
        }
    };
    var handleScrollHeader = function (e) {
        var _a, _b, _c;
        if (((_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.scrollLeft) !== undefined && ((_b = e.currentTarget) === null || _b === void 0 ? void 0 : _b.scrollLeft) !== 0) {
            (_c = containerRef.current) === null || _c === void 0 ? void 0 : _c.scrollTo(e.currentTarget.scrollLeft, scrollTop);
        }
    };
    var getHeaderInternal = useCallback(function (value) {
        if (getHeader) {
            return React.createElement("div", { key: value, className: "header-item ".concat(value) }, getHeader(value));
        }
        return React.createElement("div", { key: value, className: "header-item ".concat(value) }, value);
    }, [getHeader]);
    var Row = function (index, item) {
        if (getRow) {
            return getRow(item);
        }
        return React.createElement("div", { key: item.id, className: 'list-item', style: {
                display: 'grid',
                gridTemplateColumns: gridTemplateInternal,
                height: itemHeight,
                position: "absolute",
                top: (startIndex + index) * itemHeight + index,
                left: 0,
                right: 0,
            } }, headerElements.map(function (single) { return getElement
            ? React.createElement("div", { key: "".concat(single), style: { height: itemHeight }, className: "list-column ".concat(single) }, getElement(single, item))
            : React.createElement("div", { key: "".concat(single), style: { height: itemHeight }, className: "list-column ".concat(single) }, item[single]); }));
    };
    return React.createElement("div", { className: 'list' },
        React.createElement("div", { ref: headerRef, onScroll: handleScrollHeader, className: 'list-header', style: { gridTemplateColumns: gridTemplateInternal } }, headerElements.map(getHeaderInternal)),
        React.createElement("div", { onScroll: handleScroll, className: 'list-body', ref: containerRef, style: {
                height: "calc(100% - ".concat(((_e = (_d = headerRef === null || headerRef === void 0 ? void 0 : headerRef.current) === null || _d === void 0 ? void 0 : _d.clientHeight) !== null && _e !== void 0 ? _e : 200) + (isLoading ? itemHeight : 0), "px)")
            } },
            visibleItems.map(function (single, index) { return Row(index, single); }),
            visibleItems.length === 0 && !isLoading && (React.createElement("span", { className: "text-center" }, 'No tokens to display'))),
        isLoading ? React.createElement("div", { style: { height: itemHeight } },
            React.createElement(LoadingSpinner, null)) : null);
};
