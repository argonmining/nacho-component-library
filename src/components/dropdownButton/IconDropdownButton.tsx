import React, {FC, PropsWithChildren, ReactElement} from 'react'

import {CustomDropdown} from "../customDropdown/CustomDropdown";
import './DropdownButton.css'

type Props = {
    title?: ReactElement
}
export const IconDropdownButton: FC<PropsWithChildren<Props>> = (
    {
        title,
        children
    }
) => {
    return <CustomDropdown className={"icon-dropdown-button"}
                           title={title ?? <></>}>
        {children}
    </CustomDropdown>
}
