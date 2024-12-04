import React, {
    Children,
    FC,
    forwardRef,
    MouseEvent,
    PropsWithChildren,
    ReactElement,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState
} from "react";
import {createPortal} from "react-dom";
import {useClickOutside} from "../../hooks";
import './CustomDropdown.css'

type Props = {
    title: string | ReactElement
    menuTheme?: 'header' | 'normal'
    containerId?: string
    className?: string
    offsetX?: number
    offsetY?: number
    alwaysUp?: boolean
    stayOpen?: boolean
    fitHeader?: boolean
    onOpen?: () => void
}

type Style = { left: number, top: number }

export type DropdownRef = {
    close: () => void
}

export const CustomDropdown = forwardRef<DropdownRef, PropsWithChildren<Props>>(
    function CustomDropdown(
        {
            title,
            menuTheme = 'normal',
            containerId,
            className,
            offsetY = 0,
            offsetX = 0,
            alwaysUp = false,
            stayOpen = false,
            fitHeader,
            onOpen,
            children
        }, ref
    ) {
        const [showDropdown, setShowDropdown] = useState(false)

        const container = useMemo((): HTMLElement | null => {
            if (showDropdown) {
                return document.getElementById(containerId ?? 'portal-container')
            }
            return null
        }, [containerId, showDropdown])

        const [menu, setMenu] = useState<HTMLDivElement | null>(null)
        const dRef = useRef<HTMLDivElement | null>(null)
        const callback = useCallback(() => setShowDropdown(false), [])

        useClickOutside(menu, callback, dRef.current, showDropdown)

        useEffect(() => {
            if (showDropdown && onOpen) {
                onOpen()
            }
        }, [onOpen, showDropdown]);

        const styling = useMemo((): Style => {
            if (!showDropdown || dRef.current === null || menu === null) {
                return {
                    left: 0,
                    top: 0
                }
            }
            const spacing = 5
            const {left, top} = dRef.current.getBoundingClientRect()
            const buttonHeight = dRef.current.getBoundingClientRect().height
            const {width, height} = menu.getBoundingClientRect()
            const display = {width: window.innerWidth, height: window.innerHeight}

            const style: Style = {
                left: left,
                top: top + buttonHeight + spacing
            }
            if (display.width < left + width) {
                style.left = display.width - width - spacing
            }
            if (display.height < top + height || alwaysUp) {
                style.top = top - height - spacing
            }
            if (offsetX !== 0 || offsetY !== 0) {
                style.top = style.top + offsetY
                style.left = style.left + offsetX
            }
            return style
        }, [showDropdown, menu, alwaysUp, offsetX, offsetY])

        useImperativeHandle(ref, () => ({
            close: () => {
                setShowDropdown(false)
            }
        }), [])

        return <div className={`custom-dropdown ${className ?? ''}`}
                    ref={dRef}
                    onClick={stayOpen ? () => setShowDropdown(true) : () => setShowDropdown(current => !current)}>
            <div className="custom-dropdown-header">
                {title}
            </div>
            {showDropdown && container && Children.count(children) !== 0
                ? createPortal(<div style={{position: 'relative', width: 0, height: 0}}>
                    <div style={{
                        position: "absolute",
                        ...styling
                    }}
                         className={`custom-dropdown theme-${menuTheme} ${className ?? ''}`}>
                        <div className={'custom-dropdown-menu'}
                             style={{width: fitHeader ? `${dRef.current?.clientWidth}px` : undefined}}
                             ref={(ref) => setMenu(ref)}>
                            {children}
                        </div>
                    </div>
                </div>, container)
                : null
            }
        </div>
    }
)

type Item = {
    onClick?: (e: MouseEvent<HTMLDivElement>) => void
}
export const CustomDropdownItem: FC<PropsWithChildren<Item>> = (
    {
        onClick,
        children
    }
) => {
    return <div onClick={onClick} className={'custom-dropdown-item'}>
        {children}
    </div>

}