import React, {FC, PropsWithChildren, ReactElement} from 'react'

import {CustomDropdown} from "../customDropdown/CustomDropdown";
import './DropdownButton.css'

type Props = {
    title?: ReactElement
    theme?: 'header' | 'normal'
}
export const IconDropdownButton: FC<PropsWithChildren<Props>> = (
    {
        title,
        theme,
        children
    }
) => {
    return <CustomDropdown className={"icon-dropdown-button"}
                           title={title ?? <></>}
                           theme={theme}>
        {children}
    </CustomDropdown>
}
