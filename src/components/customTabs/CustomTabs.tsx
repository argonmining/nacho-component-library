import React, {Children, FC, PropsWithChildren, useEffect, useState} from "react";
import './CustomTabs.css'

type Props = {
    titles: string[]
    customClassname?: string
}

export const CustomTabs: FC<PropsWithChildren<Props>> = (
    {
        titles,
        customClassname,
        children
    }
) => {
    const [currentTab, setCurrentTab] = useState<number>(0)
    const [headerHeight, setHeaderHeight] = useState<number>(50)

    useEffect(() => {
        const margin = 1.5 * 16

        setHeaderHeight((document.getElementById('custom-tab-header')?.clientHeight ?? 50) + margin)
    }, []);

    return <div className={`custom-tabs ${customClassname ?? ''}`}>
        <div id={'custom-tab-header'} className={'custom-tabs-header'}>
            {titles.map((single, index) =>
                <div key={single}
                     onClick={() => setCurrentTab(index)}
                     className={`custom-tabs-header-child ${currentTab === index ? 'active' : ''}`}>
                    <span>{single}</span>
                </div>
            )}
        </div>
        <div className={'custom-tabs-content'} style={{height: `calc(100% - ${headerHeight}px)`}}>
            {Children.toArray(children)[currentTab] }
        </div>
    </div>

}