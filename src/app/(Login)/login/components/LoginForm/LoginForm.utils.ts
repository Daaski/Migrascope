import { isEmailValid } from 'utils/isEmailValid';

import { ILoginFormTypes } from 'app/(Login)/login/components/LoginForm/types';

export const LoginFormValidate = (values: ILoginFormTypes) => {
    const errors: Partial<ILoginFormTypes> = {};

    if (!values.email) {
        errors.email = 'Укажите почту';
    } else if (!isEmailValid(values.email)) {
        errors.email = 'Некорректный email';
    }

    if (!values.password) {
        errors.password = 'Укажите пароль';
    }

    return errors;
};
