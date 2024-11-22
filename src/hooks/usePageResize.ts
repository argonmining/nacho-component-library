import {CSSProperties, RefObject, useCallback, useEffect, useState} from "react";
import {useMobile} from "./mobile";

export const usePageResize = (
    element: RefObject<HTMLDivElement> | null,
    type: 'mainContent' | 'pageContent'
): CSSProperties => {
    const {isMobile} = useMobile()
    const [styling, setStyling] = useState<CSSProperties>({})

    const calculate = useCallback(() => {
        if (element === null || element.current === null) {
            return
        }

        if (type === 'mainContent') {
            if (isMobile) {
                setStyling({
                    height: `${document.body.clientHeight - (element.current.clientHeight ?? 82)}px`,
                    width: `${document.body.clientWidth}px`
                })
                return
            }
            setStyling({
                width: `${document.body.clientWidth - (element.current.clientWidth ?? 250)}px`,
                height: `${document.body.clientHeight}px`
            })
            return
        }
        setStyling({
            height: `calc(100% - ${element.current.clientHeight ?? 100}px)`
        })
    }, [element, isMobile, type])

    useEffect(() => {
        calculate()
        window.addEventListener('resize', calculate);
        return () => window.removeEventListener('resize', calculate);
    }, [calculate]);

    return styling
}