import React from 'react';

import { Input } from 'components/UI/Inputs/Input';
import { Button } from 'components/UI/Buttons/Button';
import { useFormik } from 'formik';
import {
    NewPasswordFormProps,
    NewPasswordFormValues,
} from 'app/(Login)/login/components/NewPasswordForm/types';
import { NewPasswordFormValidate } from 'app/(Login)/login/components/NewPasswordForm/NewPasswordForm.utils';

import scss from './NewPasswordForm.module.scss';

export const NewPasswordForm: React.FC<NewPasswordFormProps> = ({
    setFormType,
    previousFormType,
    setData,
    data,
}) => {
    const {
        values,
        handleChange,
        handleBlur,
        errors,
        handleSubmit,
        resetForm,
        touched,
    } = useFormik<NewPasswordFormValues>({
        initialValues: {
            password: data?.password ?? '',
            confirmPassword: data?.confirmPassword ?? '',
        },
        validate: NewPasswordFormValidate,
        onSubmit: (values) => {
            previousFormType.current = 'enterNewPassword';
            setData((prevState) => ({
                ...prevState,
                password: values.password,
                confirmPassword: values.confirmPassword,
            }));
            setFormType('enterCodeReset');
        },
    });

    return (
        <section className={scss.form_wrapper}>
            <h2 className={scss.form_title}>Новый пароль</h2>
            <form onSubmit={handleSubmit} className={scss.form}>
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
                    placeholder="Укажите пароль"
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
                    label="Подтверждение пароля"
                    placeholder="Подтвердите пароль"
                />
                <div className={scss.login_actions_wrapper}>
                    <Button
                        size="big"
                        style="gray"
                        onClick={() => {
                            resetForm();
                            setData((prevState) => ({
                                ...prevState,
                                password: values.password,
                                confirmPassword: values.confirmPassword,
                            }));
                            setFormType(previousFormType.current);
                        }}
                        type="button"
                    >
                        Назад
                    </Button>
                    <Button size="big" type="submit">
                        Далее
                    </Button>
                </div>
            </form>
        </section>
    );
};
