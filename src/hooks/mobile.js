import React, { createContext, useContext, useEffect, useState } from "react";
const MobileContext = createContext({
    isMobile: false
});
export const MobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return React.createElement(MobileContext.Provider, { value: { isMobile } }, children);
};
export const useMobile = () => {
    const { isMobile } = useContext(MobileContext);
    return { isMobile };
};
