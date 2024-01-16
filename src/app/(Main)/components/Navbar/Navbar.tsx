'use client';

import { NavbarLink } from 'app/(Main)/components/Navbar/components/NavbarLink';
import { Logo } from 'components/Logo';
import { Accounts } from 'app/(Main)/components/Navbar/components/Accounts';
import { BurgerMenu } from 'app/(Main)/components/Navbar/components/BurgerMenu';

import { useResizeWidth } from 'hooks/useResizeWidth';

import { LinksData } from 'app/(Main)/components/Navbar/LinksData';

import scss from './Navbar.module.scss';

export const Navbar = () => {
    const { tabletBreak } = useResizeWidth();
    return (
        <>
            {!tabletBreak && (
                <nav className={scss.navbar_container_desktop}>
                    <div className={scss.navbar_logo_wrapper}>
                        <Logo />
                    </div>
                    {LinksData.map((el, index) => (
                        <NavbarLink key={index} {...el} />
                    ))}
                    <Accounts />
                </nav>
            )}
            <nav className={scss.navbar_container_mobile}>
                <BurgerMenu />
            </nav>
        </>
    );
};
