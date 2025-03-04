import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import './List.css';
import { LoadingSpinner } from "../LoadingSpinner";
import { CustomDropdown, CustomDropdownItem } from "../customDropdown/CustomDropdown";
var entryAmounts = [25, 50, 100, 150, 200];
export var List = function (_a) {
    var _b;
    var headerElements = _a.headerElements, getHeader = _a.getHeader, _c = _a.showHeader, showHeader = _c === void 0 ? true : _c, items = _a.items, itemHeight = _a.itemHeight, minItemHeight = _a.minItemHeight, gridTemplate = _a.gridTemplate, getRow = _a.getRow, getElement = _a.getElement, isLoading = _a.isLoading, cssGrid = _a.cssGrid, alternateIdKey = _a.alternateIdKey, noDataText = _a.noDataText, onClickRow = _a.onClickRow;
    var containerRef = useRef(null);
    var _d = useState(), header = _d[0], setHeader = _d[1];
    var _e = useState(0), currentIndex = _e[0], setCurrentIndex = _e[1];
    var _f = useState(100), entryAmount = _f[0], setEntryAmount = _f[1];
    var indexArray = useMemo(function () {
        var arr = [];
        for (var i = 0; i < Math.ceil(items.length / entryAmount); i++) {
            arr.push(i);
        }
        return arr;
    }, [entryAmount, items.length]);
    useEffect(function () {
        if (items.length === 0) {
            setCurrentIndex(0);
            return;
        }
        if (!indexArray.includes(currentIndex)) {
            //if the index is not in the index array anymore (for example data is deleted), we set the index to the last page
            setCurrentIndex(indexArray[indexArray.length - 1]);
        }
    }, [items, indexArray, currentIndex]);
    var visibleItems = useMemo(function () { return items.slice(currentIndex * entryAmount, (currentIndex + 1) * entryAmount); }, [currentIndex, entryAmount, items]);
    var gridTemplateInternal = useMemo(function () {
        if (cssGrid) {
            return;
        }
        if (gridTemplate) {
            if (typeof gridTemplate === 'string') {
                return gridTemplate;
            }
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
        return React.createElement("div", { key: ((_a = item.id) !== null && _a !== void 0 ? _a : alternateIdKey) ? item[alternateIdKey] : String(index), className: "list-item ".concat(onClickRow ? 'hover' : ''), onClick: onClickRow ? function () { return onClickRow(item); } : undefined, style: {
                display: 'grid',
                gridTemplateColumns: gridTemplateInternal,
                height: itemHeight,
                minHeight: minItemHeight,
                margin: '1px 0',
                left: 0,
                right: 0,
            } }, headerElements.map(function (single) { return getElement
            ? React.createElement("div", { key: single, style: { height: '100%' }, className: "list-column ".concat(single) }, getElement(single, item, index))
            : React.createElement("div", { key: single, style: { height: '100%' }, className: "list-column ".concat(single) }, item[single]); }));
    };
    var changeEntryAmount = function (amount) {
        setCurrentIndex(0);
        setEntryAmount(amount);
    };
    return React.createElement("div", { className: 'list' },
        showHeader &&
            React.createElement("div", { ref: function (ref) { return setHeader(ref); }, key: 'header', onScroll: handleScrollHeader, className: 'list-header', style: { gridTemplateColumns: gridTemplateInternal } }, headerElements.map(getHeaderInternal)),
        React.createElement("div", { onScroll: handleScroll, className: 'list-body', ref: containerRef, style: {
                height: "calc(100% - ".concat((!showHeader ? 0 : (_b = header === null || header === void 0 ? void 0 : header.clientHeight) !== null && _b !== void 0 ? _b : 50) + (isLoading ? itemHeight !== null && itemHeight !== void 0 ? itemHeight : 40 : 0) + 40, "px)")
            } },
            visibleItems.map(function (single, index) { return Row(index, single); }),
            visibleItems.length === 0 && !isLoading && (React.createElement("span", { key: 'no-data', className: "text-center" }, noDataText !== null && noDataText !== void 0 ? noDataText : 'No tokens to display'))),
        isLoading ? React.createElement("div", { key: 'loading-spinner', style: { height: itemHeight !== null && itemHeight !== void 0 ? itemHeight : 40 } },
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
