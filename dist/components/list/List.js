import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import './List.css';
import { LoadingSpinner } from "../LoadingSpinner";
import { CustomDropdown, CustomDropdownItem } from "../customDropdown/CustomDropdown";
var entryAmounts = [25, 50, 100, 150, 200];
export var List = function (_a) {
    var _b;
    var headerElements = _a.headerElements, getHeader = _a.getHeader, _c = _a.showHeader, showHeader = _c === void 0 ? true : _c, items = _a.items, itemHeight = _a.itemHeight, gridTemplate = _a.gridTemplate, getRow = _a.getRow, getElement = _a.getElement, isLoading = _a.isLoading, cssGrid = _a.cssGrid, alternateIdKey = _a.alternateIdKey, noDataText = _a.noDataText;
    var containerRef = useRef(null);
    var _d = useState(), header = _d[0], setHeader = _d[1];
    var _e = useState(0), currentIndex = _e[0], setCurrentIndex = _e[1];
    var _f = useState(100), entryAmount = _f[0], setEntryAmount = _f[1];
    useEffect(function () {
        // if the data changed, we go back to the first page
        setCurrentIndex(0);
    }, [items]);
    var indexArray = useMemo(function () {
        var arr = [];
        for (var i = 0; i < Math.ceil(items.length / entryAmount); i++) {
            arr.push(i);
        }
        return arr;
    }, [entryAmount, items.length]);
    var visibleItems = useMemo(function () { return items.slice(currentIndex * entryAmount, (currentIndex + 1) * entryAmount); }, [currentIndex, entryAmount, items]);
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
        var _a, _b;
        if (!header) {
            return;
        }
        if (((_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.scrollLeft) !== undefined && ((_b = e.currentTarget) === null || _b === void 0 ? void 0 : _b.scrollLeft) !== 0) {
            header.scrollLeft = e.currentTarget.scrollLeft;
        }
    };
    var handleScrollHeader = function (e) {
        var _a, _b;
        if (!containerRef.current) {
            return;
        }
        if (((_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.scrollLeft) !== undefined && ((_b = e.currentTarget) === null || _b === void 0 ? void 0 : _b.scrollLeft) !== 0) {
            containerRef.current.scrollLeft = e.currentTarget.scrollLeft;
        }
    };
    var getHeaderInternal = useCallback(function (value) {
        if (getHeader) {
            return React.createElement("div", { key: value, className: "header-item ".concat(value) }, getHeader(value));
        }
        return React.createElement("div", { key: value, className: "header-item ".concat(value) }, value);
    }, [getHeader]);
    var Row = function (index, item) {
        var _a;
        if (getRow) {
            return getRow(item);
        }
        return React.createElement("div", { key: ((_a = item.id) !== null && _a !== void 0 ? _a : alternateIdKey) ? item[alternateIdKey] : String(index), className: 'list-item', style: {
                display: 'grid',
                gridTemplateColumns: gridTemplateInternal,
                height: itemHeight,
                margin: '1px 0',
                left: 0,
                right: 0,
            } }, headerElements.map(function (single) { return getElement
            ? React.createElement("div", { key: "".concat(single), style: { height: itemHeight }, className: "list-column ".concat(single) }, getElement(single, item))
            : React.createElement("div", { key: "".concat(single), style: { height: itemHeight }, className: "list-column ".concat(single) }, item[single]); }));
    };
    var changeEntryAmount = function (amount) {
        setCurrentIndex(0);
        setEntryAmount(amount);
    };
    return React.createElement("div", { className: 'list' },
        showHeader &&
            React.createElement("div", { ref: function (ref) { return setHeader(ref); }, onScroll: handleScrollHeader, className: 'list-header', style: { gridTemplateColumns: gridTemplateInternal } }, headerElements.map(getHeaderInternal)),
        React.createElement("div", { onScroll: handleScroll, className: 'list-body', ref: containerRef, style: {
                height: "calc(100% - ".concat((!showHeader ? 0 : (_b = header === null || header === void 0 ? void 0 : header.clientHeight) !== null && _b !== void 0 ? _b : 50) + (isLoading ? itemHeight : 0) + 40, "px)")
            } },
            visibleItems.map(function (single, index) { return Row(index, single); }),
            visibleItems.length === 0 && !isLoading && (React.createElement("span", { className: "text-center" }, noDataText !== null && noDataText !== void 0 ? noDataText : 'No tokens to display'))),
        isLoading ? React.createElement("div", { style: { height: itemHeight } },
            React.createElement(LoadingSpinner, null)) : null,
        React.createElement("div", { className: 'page-control' },
            React.createElement("div", { className: 'page-entry-amount-select' }, entryAmounts.map(function (single) {
                return React.createElement("div", { className: "amount-select ".concat(entryAmount === single ? 'active' : ''), key: single, onClick: function () { return changeEntryAmount(single); } }, single);
            })),
            React.createElement("div", { className: 'list-paging' },
                isLoading && React.createElement("div", { className: 'loading-blocker' },
                    React.createElement(LoadingSpinner, null)),
                currentIndex != 0 &&
                    React.createElement("div", { className: 'icon-wrapper', onClick: function () { return setCurrentIndex(function (current) { return current - 1; }); } },
                        React.createElement(FaChevronLeft, { size: 15 })),
                React.createElement(CustomDropdown, { title: String(currentIndex + 1), offsetX: -10, alwaysUp: true, className: 'list-paging-menu' }, indexArray.map(function (single) {
                    return React.createElement(CustomDropdownItem, { key: single, onClick: function () { return setCurrentIndex(single); } }, single + 1);
                })),
                (currentIndex + 1) * entryAmount <= items.length &&
                    React.createElement("div", { className: 'icon-wrapper', onClick: function () { return setCurrentIndex(function (current) { return current + 1; }); } },
                        React.createElement(FaChevronRight, { size: 15 })))));
};
