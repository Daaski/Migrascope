import Image from 'next/image';

import { FormsWrapper } from 'app/(Login)/login/components/FormsWrapper';
import { Logo } from 'components/Logo';

import LogoImg from '/public/images/login/Logo.png';
import LoginBackground from '/public/images/login/LoginFormBackground.png';

import scss from './LoginPage.module.scss';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <main className={scss.login_wrapper}>
            <div className={scss.logo_mobile}>
                <Logo />
            </div>
            <section className={scss.login_bg_wrapper}>
                <Image
                    fill
                    src={LoginBackground}
                    sizes={'(max-width: 1200px) 50vw'}
                    priority
                    alt="Фоновое изображение формы Авторизации"
                />
                <Link href="/login">
                    <Image className={scss.logo} src={LogoImg} alt="Logo" />
                </Link>
            </section>
            <FormsWrapper />
        </main>
    );
};

export default LoginPage;
