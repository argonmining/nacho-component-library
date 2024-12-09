import React, {FC, PropsWithChildren, ReactElement, useRef, useState} from "react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import './ExpandableDiv.css'
import {uniqueId} from "lodash";

type PropsWithoutIcon = {
    icon?: never
    title?: string | ReactElement
}
type PropsWithIcon = {
    icon?: ReactElement
    title?: string
}

type ExpandableDiv = PropsWithoutIcon | PropsWithIcon
export const ExpandableDiv: FC<PropsWithChildren<ExpandableDiv>> = (
    {
        children,
        ...props
    }
) => {
    const [isExtended, setIsExtended] = useState<boolean>(false)
    const id = useRef(uniqueId()).current

    return <ControlledExpandableDiv changeExtended={() => setIsExtended(current => !current)}
                                    isExtended={isExtended}
                                    id={id}
                                    {...props}>
        {children}
    </ControlledExpandableDiv>
}

type ControlledExpandableDiv = ExpandableDiv & {
    id: string
    isExtended: boolean
    changeExtended: (id?: string) => void
}
export const ControlledExpandableDiv: FC<PropsWithChildren<ControlledExpandableDiv>> = (
    {
        title,
        id,
        icon,
        isExtended,
        changeExtended,
        children
    }
) => {
    return <div className={'expandable-div'}>
        <div className={`expandable-div-header ${isExtended ? 'extended' : ''}`}
             onClick={() => changeExtended(id)}>
            {icon}
            {title && typeof title === 'object' ? title : <span>{title}</span>}
            {isExtended ? <FaChevronUp/> : <FaChevronDown/>}
        </div>
        <div className={`expandable-div-body ${isExtended ? 'extended' : ''}`}>
            {isExtended && children}
        </div>
    </div>
}