import React, {FC, PropsWithChildren, ReactElement} from 'react'

import {CustomDropdown} from "../customDropdown/CustomDropdown";
import './DropdownButton.css'

type Props = {
    title?: ReactElement
    menuTheme?: 'header' | 'normal'
}
export const IconDropdownButton: FC<PropsWithChildren<Props>> = (
    {
        title,
        menuTheme,
        children
    }
) => {
    return <CustomDropdown className={"icon-dropdown-button"}
                           title={title ?? <></>}
                           menuTheme={menuTheme}>
        {children}
    </CustomDropdown>
}
