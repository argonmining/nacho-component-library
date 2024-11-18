import React, {FC, ReactNode} from 'react';
import {Link, LinkProps} from 'react-router-dom';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

type Props = LinkProps & {
    to: string
    tooltip: string
    children: ReactNode
}
export const LinkWithTooltip: FC<Props> = ({to, tooltip, children, ...props}) => (
    <OverlayTrigger
        placement="top"
        overlay={<Tooltip>{tooltip}</Tooltip>}
    >
        <Link to={to} {...props}>{children}</Link>
    </OverlayTrigger>
);
