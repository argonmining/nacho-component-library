import {useEffect} from "react";

export const useClickOutside = (
    element: HTMLElement | null,
    handler: (e: MouseEvent | TouchEvent) => void,
    alternate?: HTMLElement | null,
    condition?: boolean
): void => {

    useEffect(() => {
        const callback = (e: MouseEvent | TouchEvent) => {
            if (!element?.contains(e.target as Node)) {
                if (alternate !== undefined && (alternate === e.target || alternate?.contains(e.target as Node))){
                    return
                }
                handler(e)
            }
        }
        if (condition && element !== null && (alternate === undefined || alternate !== null)) {
            document.addEventListener('mousedown', callback)
            document.addEventListener('touchstart', callback)
        }
        return () => {
            document.removeEventListener('mousedown', callback)
            document.removeEventListener('touchstart', callback)
        }
    }, [alternate, condition, handler, element]);
}