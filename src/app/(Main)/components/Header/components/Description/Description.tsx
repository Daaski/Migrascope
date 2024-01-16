'use client';

import { LinksData } from 'app/(Main)/components/Navbar/LinksData';
import { usePathname } from 'next/navigation';

export const Description = () => {
    const pathname = usePathname();
    return <>{getDescription(pathname)}</>;
};

function getDescription(pathname: string) {
    if (pathname === '/') {
        return LinksData[0].text;
    }
    return LinksData.slice(1).find((el) => pathname.startsWith(el.href))
        ?.text as string;
}
