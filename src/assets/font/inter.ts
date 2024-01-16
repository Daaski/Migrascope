import { Inter } from 'next/font/google';

import 'scss/utils.scss';

export const inter = Inter({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    style: ['normal'],
    variable: '--font-inter',
});
