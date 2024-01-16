'use client';
import Link from 'next/link';

import LogoSvg from '/public/svg/logo.svg';

import scss from './Logo.module.scss';

export const Logo = ({ onClick }: { onClick?: () => void }) => {
    return (
        <Link onClick={onClick} href="/login" className={scss.logo}>
            <h1 className={scss.logo_title}>миграконтроль</h1>
            <LogoSvg className={scss.logo_svg} />
        </Link>
    );
};
