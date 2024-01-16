import type { Metadata } from 'next';
import React from 'react';

import { ToastContainer } from 'react-toastify';

import { Header } from 'app/(Main)/components/Header';
import { Navbar } from 'app/(Main)/components/Navbar';

import { poppins } from 'assets/font/poppins';
import { inter } from 'assets/font/inter';

import scss from './MainPage.module.scss';
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
            <body
                className={`${poppins.variable} ${inter.variable} ${scss.body}`}
            >
                <Navbar />
                <Header />
                <div style={{ display: 'flex' }}>{children}</div>
                <ToastContainer />
            </body>
        </html>
    );
}
