import React, {FC, PropsWithChildren, ReactElement, useRef} from "react";
import {usePageResize} from "../../hooks";
import './Page.css'

type Props = {
    header: string
    additionalHeaderInfo?: string
    additionalHeaderComponent?: ReactElement
    className?: string
}

export const Page: FC<PropsWithChildren<Props>> = (
    {
        header,
        additionalHeaderInfo,
        additionalHeaderComponent,
        className,
        children
    }
) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const styling = usePageResize(ref, 'pageContent')

    return <div style={{width: '100%', height: '100%'}} className={`page ${className ?? ''}`}>
        <div ref={ref} className={'page-header'}>
            <h1>{header}</h1>
            {additionalHeaderInfo && <span>{additionalHeaderInfo}</span>}
            {additionalHeaderComponent}
        </div>
        <div className={'page-content'} style={styling}>
            {children}
        </div>
    </div>
}