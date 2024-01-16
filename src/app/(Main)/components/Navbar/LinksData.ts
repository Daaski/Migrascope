import { NavbarLink } from 'app/(Main)/components/Navbar/types';

import Profile from '/public/svg/profile.svg';
import Tasks from 'app/(Main)/components/Navbar/svg/case.svg';
import Forms from '/public/svg/notifications.svg';
import Building from 'app/(Main)/components/Navbar/svg/building.svg';
import People from 'app/(Main)/components/Navbar/svg/people.svg';
import Globe from 'app/(Main)/components/Navbar/svg/globe.svg';

export const LinksData: NavbarLink[] = [
    { href: '/', text: 'Личный кабинет', svg: Profile },
    {
        href: '/forms',
        text: 'Бланки',
        svg: Forms,
    },
    {
        href: '/companies',
        text: 'Компании',
        svg: Building,
    },
    {
        href: '/workers',
        text: 'Сотрудники',
        svg: People,
    },
    {
        href: '/news',
        text: 'Новости',
        svg: Globe,
    },
    {
        href: '/tasks',
        text: 'Задачи',
        svg: Tasks,
    },
];
