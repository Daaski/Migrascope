import { ElementType } from 'react';

export interface NavbarLink {
    href: string;
    text: string;
    svg: ElementType;
}

export interface NavbarLinkProps extends NavbarLink {
    onClick?: () => void;
}
