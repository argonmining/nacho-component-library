import React, {ReactElement, UIEvent, useCallback, useMemo, useRef, useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa6";
import './List.css'
import {LoadingSpinner} from "../LoadingSpinner";
import {CustomDropdown, CustomDropdownItem} from "../customDropdown/CustomDropdown";

type Props<T> = {
    headerElements: string[]
    getHeader?: (header: string) => ReactElement | null
    items: T[]
    itemHeight: number,
    gridTemplate?: number[]
    getRow?: (item: T) => ReactElement
    getElement?: (header: string | Partial<keyof T>, item: T) => ReactElement
    isLoading?: boolean
    cssGrid?: boolean
}
const entryAmounts = [25, 50, 100, 150, 200]
export const List = <T extends Record<string, unknown> & { id: string }>(
    {
        headerElements,
        getHeader,
        items,
        itemHeight,
        gridTemplate,
        getRow,
        getElement,
        isLoading,
        cssGrid
    }: Props<T>
): ReactElement => {

    const containerRef = useRef<HTMLDivElement | null>(null)
    const headerRef = useRef<HTMLDivElement | null>(null)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [entryAmount, setEntryAmount] = useState<number>(100)

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
        if (!headerRef.current) {
            return
        }
        if (e.currentTarget?.scrollLeft !== undefined && e.currentTarget?.scrollLeft !== 0) {
            headerRef.current.scrollLeft = e.currentTarget.scrollLeft
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

        return <div key={item.id} className={'list-item'}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: gridTemplateInternal,
                        height: itemHeight,
                        margin: '1px 0',
                        left: 0,
                        right: 0,
                    }}>
            {headerElements.map(single => getElement
                ? <div key={`${single}`} style={{height: itemHeight}}
                       className={`list-column ${single}`}>{getElement(single, item)}</div>
                : <div key={`${single}`} style={{height: itemHeight}}
                       className={`list-column ${single}`}>{item[single] as string}</div>)}
        </div>
    }

    return <div className={'list'}>
        <div ref={headerRef} onScroll={handleScrollHeader} className={'list-header'}
             style={{gridTemplateColumns: gridTemplateInternal}}>
            {headerElements.map(getHeaderInternal)}
        </div>
        <div onScroll={handleScroll}
             className={'list-body'}
             ref={containerRef}
             style={{
                 height: `calc(100% - ${(headerRef?.current?.clientHeight ?? 200) + (isLoading ? itemHeight : 0) + 40}px)`
             }}>

            {visibleItems.map((single, index) => Row(index, single))}
            {visibleItems.length === 0 && !isLoading && (
                <span className="text-center">
                    {'No tokens to display'}
                </span>
            )}
        </div>
        {isLoading ? <div style={{height: itemHeight}}><LoadingSpinner/></div> : null}
        <div className={'page-control'}>
            <div className={'page-entry-amount-select'}>
                {entryAmounts.map(single =>
                    <div className={'amount-select'}
                         key={single}
                         onClick={() => setEntryAmount(single)}>
                        {single}
                    </div>)
                }
            </div>
            <div className={'list-paging'}>
                {currentIndex != 0 &&
                    <div className={'icon-wrapper'} onClick={() => setCurrentIndex(current => current - 1)}>
                        <FaChevronLeft size={15}/>
                    </div>
                }
                <CustomDropdown title={String(currentIndex + 1)}
                                offsetX={-10}
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