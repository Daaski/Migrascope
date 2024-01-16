import { useState, useEffect } from 'react';

const tabletBreakpoint = 769;
const bigTabletBreakpoint = 1024;
const thousandPcBreakPoint = 1200;
const thousandThreePoint = 1300;
const laptopBreakpoint = 1440;
const phoneBreak = 480;

export const useResizeWidth = () => {
    const [width, setWidth] = useState<number>();

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = (event: Event) => {
            setWidth((event.target as Window).innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
        tabletBreak: (width as number) <= tabletBreakpoint,
        bigTabletBreak: (width as number) <= bigTabletBreakpoint,
        laptopBreak: (width as number) <= laptopBreakpoint,
        phoneBreak: (width as number) <= phoneBreak,
        thousandTwoBreak: (width as number) <= thousandPcBreakPoint,
        thousandThreeBreak: (width as number) <= thousandThreePoint,
    };
};
