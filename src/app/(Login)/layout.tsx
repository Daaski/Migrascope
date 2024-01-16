import React from 'react';
import type { Metadata } from 'next';

import { ToastContainer } from 'react-toastify';

import { poppins } from 'assets/font/poppins';
import { inter } from 'assets/font/inter';

import 'react-toastify/dist/ReactToastify.css';
import 'scss/utils.scss';
import 'scss/_reset.scss';

export const metadata: Metadata = {
    title: 'Migrascope',
    description: 'Migrascope',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body className={`${poppins.variable} ${inter.variable}`}>
                {children}
                <ToastContainer />
            </body>
        </html>
    );
}
