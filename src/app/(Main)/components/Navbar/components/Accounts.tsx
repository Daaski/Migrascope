'use client';

import AccountsSvg from 'app/(Main)/components/Navbar/svg/accounts.svg';
import XSvg from '/public/svg/x.svg';

import scss from 'app/(Main)/components/Navbar/Navbar.module.scss';

export const Accounts = () => {
    return (
        <div className={scss.accounts}>
            <div>
                <AccountsSvg className={scss.navbarlink_svg} />
                <p className={scss.navbarlink_text}>Аккаунты</p>
            </div>
            <XSvg className={scss.svg} />
        </div>
    );
};
