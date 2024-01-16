import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { Accounts } from 'app/(Main)/components/Navbar/components/Accounts';
import { Logo } from 'components/Logo';
import { NavbarLink } from 'app/(Main)/components/Navbar/components/NavbarLink';

import { LinksData } from 'app/(Main)/components/Navbar/LinksData';

import BurgerSvg from '/public/svg/burger.svg';
import Escape from '/public/svg/x.svg';

import scss from 'app/(Main)/components/Navbar/Navbar.module.scss';

export const BurgerMenu = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <BurgerSvg
                className={scss.burger_svg}
                onClick={() => setVisible(!visible)}
            />
            <AnimatePresence>
                {visible && (
                    <motion.div
                        onClick={() => {
                            setVisible(!visible);
                        }}
                        exit={{ background: 'transparent' }}
                        className={scss.menu_outer}
                    >
                        <motion.nav
                            onClick={(e) => e.stopPropagation()}
                            initial={{ x: '100%' }}
                            animate={{
                                translateX: '-100%',
                            }}
                            exit={{ translateX: '100%' }}
                            transition={{ ease: 'easeOut', duration: 0.2 }}
                            className={scss.menu}
                        >
                            <div className={scss.navbar_logo_mobile}>
                                <Logo onClick={() => setVisible(false)} />
                            </div>
                            {LinksData.map((el, index) => (
                                <NavbarLink
                                    onClick={() => setVisible(false)}
                                    key={index}
                                    {...el}
                                />
                            ))}
                            <Accounts />
                            <Escape
                                onClick={() => setVisible(!visible)}
                                className={scss.menu_exit}
                            />
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
