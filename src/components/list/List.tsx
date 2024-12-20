import React, {ReactElement, UIEvent, useCallback, useEffect, useMemo, useRef, useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa6";
import './List.css'
import {LoadingSpinner} from "../LoadingSpinner";
import {CustomDropdown, CustomDropdownItem} from "../customDropdown/CustomDropdown";

type Props<T> = {
    headerElements: string[]
    items: T[]
    itemHeight?: number,
    minItemHeight?: number,
    gridTemplate?: number[]
    getRow?: (item: T) => ReactElement
    getElement?: (header: string | Partial<keyof T>, item: T) => ReactElement | null
    isLoading?: boolean
    cssGrid?: boolean
    alternateIdKey?: keyof T
    noDataText?: string
    onClickRow?: (item: T) => void
}

interface HeadlessList<T> extends Props<T> {
    getHeader?: never
    showHeader?: boolean
}

interface List<T> extends Props<T> {
    getHeader?: (header: string) => ReactElement | null
    showHeader?: never
}

const entryAmounts = [25, 50, 100, 150, 200]
export const List = <T extends Record<string, unknown> & { id?: string | number }>(
    {
        headerElements,
        getHeader,
        showHeader = true,
        items,
        itemHeight,
        minItemHeight,
        gridTemplate,
        getRow,
        getElement,
        isLoading,
        cssGrid,
        alternateIdKey,
        noDataText,
        onClickRow
    }: HeadlessList<T> | List<T>
): ReactElement => {

    const containerRef = useRef<HTMLDivElement | null>(null)
    const [header, setHeader] = useState<HTMLDivElement | null>()
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [entryAmount, setEntryAmount] = useState<number>(100)

    useEffect(() => {
        // if the data changed, we go back to the first page
        setCurrentIndex(0)
    }, [items]);

    const indexArray = useMemo((): number[] => {
        const arr: number[] = []
        for (let i = 0; i < Math.ceil(items.length / entryAmount); i++) {
            arr.push(i)
        }
        return arr
    }, [entryAmount, items.length])

    const visibleItems = useMemo(() => items.slice(currentIndex * entryAmount, (currentIndex + 1) * entryAmount), [currentIndex, entryAmount, items])

    const gridTemplateInternal = useMemo(() => {
        if (cssGrid) {
            return
        }
        if (gridTemplate) {

            return gridTemplate.map(single => `${single}px`).join(" ")
        }
        return headerElements.map(() => '1fr').join(" ")
    }, [cssGrid, gridTemplate, headerElements])

    const handleScroll = (e: UIEvent<HTMLDivElement>): void => {
        if (!header) {
            return
        }
        if (e.currentTarget?.scrollLeft !== undefined && e.currentTarget?.scrollLeft !== 0) {
            header.scrollLeft = e.currentTarget.scrollLeft
        }
    }
    const handleScrollHeader = (e: UIEvent<HTMLDivElement>): void => {
        if (!containerRef.current) {
            return
        }
        if (e.currentTarget?.scrollLeft !== undefined && e.currentTarget?.scrollLeft !== 0) {
            containerRef.current.scrollLeft = e.currentTarget.scrollLeft
        }
    }

    const getHeaderInternal = useCallback((value: string): ReactElement => {
        if (getHeader) {
            return <div key={value} className={`header-item ${value}`}>{getHeader(value)}</div>
        }
        return <div key={value} className={`header-item ${value}`}>{value}</div>

    }, [getHeader])

    const Row = (index: number, item: T): ReactElement => {
        if (getRow) {
            return getRow(item)
        }

        return <div key={item.id ?? alternateIdKey ? item[alternateIdKey!] as string : String(index)}
                    className={`list-item ${onClickRow ? 'hover' : ''}`}
                    onClick={onClickRow ? () => onClickRow(item) : undefined}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: gridTemplateInternal,
                        height: itemHeight,
                        minHeight: minItemHeight,
                        margin: '1px 0',
                        left: 0,
                        right: 0,
                    }}>
            {headerElements.map(single => getElement
                ? <div key={single}
                       style={{height: '100%'}}
                       className={`list-column ${single}`}>
                    {getElement(single, item)}
                </div>
                : <div key={single}
                       style={{height: '100%'}}
                       className={`list-column ${single}`}>
                    {item[single] as string}
                </div>
            )}
        </div>
    }

    const changeEntryAmount = (amount: number): void => {
        setCurrentIndex(0)
        setEntryAmount(amount)
    }

    return <div className={'list'}>
        {showHeader &&
            <div ref={(ref) => setHeader(ref)}
                 key={'header'}
                 onScroll={handleScrollHeader}
                 className={'list-header'}
                 style={{gridTemplateColumns: gridTemplateInternal}}>
                {headerElements.map(getHeaderInternal)}
            </div>
        }
        <div onScroll={handleScroll}
             className={'list-body'}
             ref={containerRef}
             style={{
                 height: `calc(100% - ${(!showHeader ? 0 : header?.clientHeight ?? 50) + (isLoading ? itemHeight ?? 40 : 0) + 40}px)`
             }}>

            {visibleItems.map((single, index) => Row(index, single))}
            {visibleItems.length === 0 && !isLoading && (
                <span key={'no-data'} className="text-center">
                    {noDataText ?? 'No tokens to display'}
                </span>
            )}
        </div>
        {isLoading ? <div key={'loading-spinner'} style={{height: itemHeight ?? 40}}><LoadingSpinner/></div> : null}
        <div className={'page-control'}>
            <div className={'page-entry-amount-select'}>
                {entryAmounts.map(single =>
                    <div className={`amount-select ${entryAmount === single ? 'active' : ''}`}
                         key={single}
                         onClick={() => changeEntryAmount(single)}>
                        {single}
                    </div>)
                }
            </div>
            <div className={'list-paging'}>
                {isLoading && <div className={'loading-blocker'}><LoadingSpinner/></div>}
                {currentIndex != 0 &&
                    <div className={'icon-wrapper'} onClick={() => setCurrentIndex(current => current - 1)}>
                        <FaChevronLeft size={15}/>
                    </div>
                }
                <CustomDropdown title={String(currentIndex + 1)}
                                offsetX={-10}
                                alwaysUp={true}
                                className={'list-paging-menu'}>
                    {indexArray.map((single) =>
                        <CustomDropdownItem key={single}
                                            onClick={() => setCurrentIndex(single)}>
                            {single + 1}
                        </CustomDropdownItem>
                    )}
                </CustomDropdown>
                {(currentIndex + 1) * entryAmount <= items.length &&
                    <div className={'icon-wrapper'} onClick={() => setCurrentIndex(current => current + 1)}>
                        <FaChevronRight size={15}/>
                    </div>
                }
            </div>
        </div>
    </div>
}