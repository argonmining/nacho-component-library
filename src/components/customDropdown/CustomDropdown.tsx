import React, {FC, PropsWithChildren, ReactElement, useCallback, useMemo, useRef, useState} from "react";
import {createPortal} from "react-dom";
import './CustomDropdown.css'
import {useClickOutside} from "../../hooks/useClickOutside";

type Props = {
    title: string | ReactElement
    containerId?: string
    className?: string
    offsetX?: number
    offsetY?: number
}

type Style = { left: number, top: number }

export const CustomDropdown: FC<PropsWithChildren<Props>> = (
    {
        title,
        containerId,
        className,
        offsetY = 0,
        offsetX = 0,
        children
    }
) => {
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
        if (display.height < top + height) {
            style.top = top - height - spacing
        }
        if (offsetX !== 0 || offsetY !== 0) {
            style.top = style.top + offsetY
            style.left = style.left + offsetX
        }
        return style
    }, [dRef, menu, showDropdown, offsetY, offsetX])

    return <div className={`custom-dropdown ${className ?? ''}`}
                ref={dRef}
                onClick={() => setShowDropdown(current => !current)}>
        <div className="custom-dropdown-header">
            {title}
        </div>
        {showDropdown && container
            ? createPortal(<div style={{position: 'relative', width: 0, height: 0}}>
                <div style={{
                    position: "absolute",
                    ...styling
                }}
                     className={`custom-dropdown ${className ?? ''}`}>
                    <div className={'custom-dropdown-menu'}
                         ref={(ref) => setMenu(ref)}>
                        {children}
                    </div>
                </div>
            </div>, container)
            : null
        }
    </div>
}

type Item = {
    onClick?: () => void
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