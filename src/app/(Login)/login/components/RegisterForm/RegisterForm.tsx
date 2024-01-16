import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'components/UI/Inputs/Input';
import { InputCheckbox } from 'components/UI/Inputs/InputCheckbox';
import { Button } from 'components/UI/Buttons/Button';
import { InputMask } from 'components/UI/Inputs/InputMask';

import { RegisterFormValidate } from 'app/(Login)/login/components/RegisterForm/RegisterForm.utils';

import {
    RegisterFormProps,
    RegisterFormTypes,
} from 'app/(Login)/login/components/RegisterForm/types';
import { checkEmail } from 'http/accountService/accountService';

import scss from './RegisterForm.module.scss';

export const RegisterForm: React.FC<RegisterFormProps> = ({
    setFormType,
    setData,
    previousFormType,
    data,
}) => {
    const [loading, setLoading] = useState(false);

    const onSubmit = async (values: RegisterFormTypes) => {
        setLoading(true);
        try {
            await checkEmail(values.email, 'register');
            setData(values);
            setFormType('enterCode');
            previousFormType.current = 'register';
        } catch (e) {
            errors.email = 'Такой email уже занят';
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
    } = useFormik<RegisterFormTypes>({
        initialValues: {
            email: data?.email ?? '',
            password: data?.password ?? '',
            name: data?.name ?? '',
            confirmPassword: data?.confirmPassword ?? '',
            patronymic: data?.patronymic ?? '',
            phone: data?.phone ?? '',
            surname: data?.surname ?? '',
            remember: data?.remember ?? false,
        },
        validate: RegisterFormValidate,
        onSubmit,
    });

    /*console.log(
        atob(
            'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'
        )
    );*/

    return (
        <section className={scss.register_form_wrapper}>
            <h2 className={scss.register_title}>Регистрация</h2>
            <form onSubmit={handleSubmit} className={scss.register_form}>
                <div className={scss.organized_inputs}>
                    <Input
                        size="big"
                        required
                        value={values.name}
                        name="name"
                        onChange={handleChange}
                        type="text"
                        onBlur={handleBlur}
                        handleError={touched.name && errors.name}
                        label="Имя"
                        placeholder="Введите имя"
                    />
                    <Input
                        size="big"
                        required
                        value={values.surname}
                        name="surname"
                        onChange={handleChange}
                        type="text"
                        onBlur={handleBlur}
                        handleError={touched.surname && errors.surname}
                        label="Фамилия"
                        placeholder="Введите фамилию"
                    />
                </div>
                <Input
                    size="big"
                    value={values.patronymic}
                    name="patronymic"
                    onChange={handleChange}
                    type="text"
                    onBlur={handleBlur}
                    handleError={touched.patronymic && errors.patronymic}
                    label="Отчество"
                    placeholder="Введите отчество"
                />
                <div className={scss.organized_inputs}>
                    <Input
                        size="big"
                        required
                        value={values.email}
                        name="email"
                        onChange={handleChange}
                        type="email"
                        onBlur={handleBlur}
                        handleError={touched.email && errors.email}
                        label="Email"
                        placeholder="Введите email"
                    />
                    <InputMask
                        label={`Номер телефона`}
                        name="phone"
                        required
                        placeholder="+7(___)___-__-__"
                        handleError={touched.phone && errors.phone}
                        value={values.phone}
                        alwaysShowMask={true}
                        size="big"
                        mask="+7(999)999-99-99"
                        onBlur={() => setFieldTouched('phone', true)}
                        onChange={(value: string) => {
                            setFieldTouched('phone', true);
                            setFieldValue('phone', value);
                        }}
                        type="tel"
                    />
                </div>
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
                <Input
                    size="big"
                    required
                    value={values.confirmPassword}
                    name="confirmPassword"
                    changePasswordVisibility
                    onChange={handleChange}
                    type="password"
                    onBlur={handleBlur}
                    handleError={
                        touched.confirmPassword && errors.confirmPassword
                    }
                    label="Подтвердите пароль"
                    placeholder="Подтвердите пароль"
                />

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
                        Зарегистрироваться
                    </Button>
                </div>
            </form>
            <p className={scss.change_form_text_in_register}>
                Уже есть аккаунт?
                <span
                    className={scss.linked_text}
                    onClick={() => {
                        setData(null);
                        resetForm();
                        setFormType('login');
                    }}
                >
                    {' '}
                    Войти
                </span>
            </p>
        </section>
    );
};
