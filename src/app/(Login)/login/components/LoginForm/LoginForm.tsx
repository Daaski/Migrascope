import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

import { Input } from 'components/UI/Inputs/Input';
import { InputCheckbox } from 'components/UI/Inputs/InputCheckbox';
import { Button } from 'components/UI/Buttons/Button';

import { LoginAction } from 'app/(Login)/login/actions';
import { LoginFormValidate } from 'app/(Login)/login/components/LoginForm/LoginForm.utils';

import {
    ILoginFormTypes,
    LoginFormProps,
} from 'app/(Login)/login/components/LoginForm/types';

import scss from './LoginForm.module.scss';

export const LoginForm: React.FC<LoginFormProps> = ({ setFormType }) => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (values: ILoginFormTypes) => {
        try {
            setLoading(true);
            await LoginAction(values);
            router.replace('/');
        } catch (e) {
            if (e instanceof Error) {
                if (e.message === 'username_or_password_invalid') {
                    errors.email = 'Неправильный логин или пароль';
                    errors.password = 'Неправильный логин или пароль';
                }
            }
        } finally {
            setLoading(false);
        }
    };

    const {
        values,
        handleChange,
        setFieldValue,
        handleBlur,
        errors,
        handleSubmit,
        setFieldTouched,
        resetForm,
        touched,
    } = useFormik<ILoginFormTypes>({
        initialValues: {
            email: '',
            password: '',
            remember: false,
        },
        validate: LoginFormValidate,
        onSubmit,
    });

    return (
        <section className={scss.form_wrapper}>
            <h2 className={scss.form_title}>Вход</h2>
            <form onSubmit={handleSubmit} className={scss.form}>
                <Input
                    size="big"
                    required
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    type="email"
                    onBlur={handleBlur}
                    handleError={touched.email && errors.email}
                    label="Email или имя пользователя"
                    placeholder="Введите email"
                />
                <Input
                    size="big"
                    required
                    value={values.password}
                    name="password"
                    changePasswordVisibility
                    onChange={handleChange}
                    type="password"
                    onBlur={handleBlur}
                    handleError={touched.password && errors.password}
                    label="Пароль"
                    placeholder="Введите пароль"
                />
                <span
                    onClick={() => setFormType('passRecovery')}
                    className={scss.forgot_password}
                >
                    Забыли пароль?
                </span>
                <div className={scss.login_actions_wrapper}>
                    <InputCheckbox
                        value={values.remember}
                        name="rememberCheckbox"
                        onChange={(v) => {
                            setFieldValue('remember', v);
                            setFieldTouched('remember');
                        }}
                        label="Запомнить меня"
                    />
                    <Button loading={loading} size="big" type="submit">
                        Войти
                    </Button>
                </div>
            </form>
            <p className={scss.change_form_text}>
                Ещё нет аккаунта?
                <span
                    className={scss.linked_text}
                    onClick={() => {
                        resetForm();
                        setFormType('register');
                    }}
                >
                    {' '}
                    Зарегестрироваться!
                </span>
            </p>
        </section>
    );
};
