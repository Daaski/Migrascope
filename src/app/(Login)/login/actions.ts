'use server';
import {
    authUser,
    changePassword,
    registerUser,
} from 'http/accountService/accountService';
import { cookies } from 'next/headers';

import { ILoginFormTypes } from 'app/(Login)/login/components/LoginForm/types';
import { RegisterUserAction } from 'app/(Login)/login/components/RegisterForm/types';
import {
    AuthUserBody,
    ChangePasswordBody,
    RegisterUserBody,
} from 'http/accountService/types';
import { AxiosError } from 'axios';

const cookie = cookies();

export const LoginAction = async (values: ILoginFormTypes) => {
    const body: AuthUserBody = {
        password: values.password,
        username: values.email,
    };
    try {
        const { access, refresh } = await authUser(body);

        cookie.set('access', access);
        cookie.set('refresh', refresh);
    } catch (e) {
        if (e instanceof AxiosError) {
            throw new Error(e.response?.data.message[0]);
        }
    }
};

export const RegisterAction = async ({
    name,
    confirmPassword,
    password,
    email,
    surname,
    remember,
    phone,
    patronymic,
    pvc,
}: RegisterUserAction) => {
    const body: RegisterUserBody = {
        name: name,
        phone: phone,
        surname: surname,
        password: password,
        verified_password: confirmPassword,
        patronymic,
        username: email,
        remember: remember,
        pvc: pvc,
    };
    try {
        const userResponse = await registerUser(body);

        cookie.set('access', userResponse.access);
        cookie.set('refresh', userResponse.refresh);

        return userResponse.user;
    } catch (e) {
        if (e instanceof AxiosError) {
            throw new Error(JSON.stringify(e.response?.data));
        }
    }
};

export const ChangePasswordAction = async (changeProps: {
    pvc: string;
    password: string;
    confirmPassword: string;
    email: string;
}) => {
    const body: ChangePasswordBody = {
        ...changeProps,
        verified_password: changeProps.confirmPassword,
    };

    try {
        await changePassword(body);

        return true;
    } catch (e) {
        if (e instanceof AxiosError) {
            throw new Error(JSON.stringify(e.response?.data));
        }
    }
};
