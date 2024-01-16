import React from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { NavbarLinkProps } from 'app/(Main)/components/Navbar/types';

import scss from 'app/(Main)/components/Navbar/Navbar.module.scss';

export const NavbarLink: React.FC<NavbarLinkProps> = ({
    href,
    text,
    svg: Svg,
    onClick,
}) => {
    const pathname = usePathname();
    const active = checkActive(pathname, href);

    return (
        <Link
            onClick={onClick}
            data-isactive={active}
            className={scss.navbarlink}
            href={href}
        >
            <Svg className={scss.navbarlink_svg} />
            <p className={scss.navbarlink_text}>{text}</p>
        </Link>
    );
};

function checkActive(currentPathname: string, url: string) {
    if (currentPathname !== '/' && url !== '/') {
        return currentPathname.startsWith(url);
    } else {
        return currentPathname === url;
    }
}
