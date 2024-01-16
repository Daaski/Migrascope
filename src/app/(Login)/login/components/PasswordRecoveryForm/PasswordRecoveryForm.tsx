import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'components/UI/Inputs/Input';
import { Button } from 'components/UI/Buttons/Button';

import { checkEmail } from 'http/accountService/accountService';
import { PasswordRecoveryValidate } from 'app/(Login)/login/components/PasswordRecoveryForm/PasswordRecoveryUtils';

import { AxiosError } from 'axios';
import {
    PasswordRecoveryFormProps,
    PasswordRecoveryFormTypes,
} from 'app/(Login)/login/components/PasswordRecoveryForm/types';

import scss from './PasswordRecoveryForm.module.scss';

export const PasswordRecoveryForm: React.FC<PasswordRecoveryFormProps> = ({
    setFormType,
    previousFormType,
    data,
    setData,
}) => {
    const [loading, setLoading] = useState(false);
    const onSubmit = async (values: PasswordRecoveryFormTypes) => {
        setLoading(true);
        try {
            await checkEmail(values.email, 'change_password');
            previousFormType.current = 'passRecovery';
            setData({ email: values.email });
            setFormType('enterNewPassword');
        } catch (e) {
            if (e instanceof AxiosError) {
                errors.email = 'Такого email не существует';
            }
        } finally {
            setLoading(false);
        }
    };

    const {
        values,
        handleChange,
        resetForm,
        handleBlur,
        errors,
        handleSubmit,
        touched,
    } = useFormik<PasswordRecoveryFormTypes>({
        initialValues: {
            email: data?.email ?? '',
        },
        validate: PasswordRecoveryValidate,
        onSubmit,
    });

    return (
        <section className={scss.form_wrapper}>
            <h2 className={scss.recovery_form_title}>Восстановление пароля</h2>
            <p className={scss.form_description}>
                Введите адрес электронной почты
            </p>
            <form onSubmit={handleSubmit} className={scss.recovery_form}>
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
                <div className={scss.login_actions_wrapper}>
                    <Button
                        size="big"
                        style="gray"
                        onClick={() => {
                            resetForm();
                            setData(null);
                            setFormType('login');
                        }}
                        type="button"
                    >
                        Назад
                    </Button>
                    <Button loading={loading} size="big" type="submit">
                        Далее
                    </Button>
                </div>
            </form>
        </section>
    );
};
