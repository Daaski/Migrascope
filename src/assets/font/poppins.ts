import { Poppins } from 'next/font/google';

import 'scss/utils.scss';

export const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    style: ['normal'],
    variable: '--font-poppins',
});
