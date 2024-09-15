import { FC, ReactNode } from "react";

import '.IconLink.styles.scss';

interface IconLinkProps {
    label?: string;
    labelTextColor?: string;
    labelBackgroundColor?: string;
    href: string;
    children: ReactNode;
}

const IconLink: FC<IconLinkProps> = ({
    label,
    labelTextColor = 'white',
    labelBackgroundColor ='#0071ae',
    href,
    children
}) => {
    return <a href={href} className="icon-Link">
        {children}
        {
        label && <div style={{
            color: labelTextColor,
            backgroundColor: labelBackgroundColor
        }}
        className="icon-Link-label"
        >{label}</div>
        }
   </a>
    
};

export { IconLink };
    