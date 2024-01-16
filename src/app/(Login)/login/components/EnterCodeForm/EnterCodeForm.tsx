'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FormikErrors, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { PinCodeInput } from 'components/UI/Inputs/PinCodeInput';

import {
    EnterCodeFormValidate,
    isFullFilled,
    onRegisterSubmit,
    onResetPasswordSubmit,
} from 'app/(Login)/login/components/EnterCodeForm/EnterCodeForm.utils';
import { checkEmail } from 'http/accountService/accountService';

import RayArrow from '/public/svg/rayArrow.svg';
import Spinner from '/public/svg/spinner.svg';

import { successToastConfig } from 'config/toastConfig';

import {
    EnterCodeFormProps,
    EnterCodeFormValues,
} from 'app/(Login)/login/components/EnterCodeForm/types';
import {
    RecoveryPassType,
    RegisterFormTypes,
} from 'app/(Login)/login/components/RegisterForm/types';

import scss from './EnterCodeForm.module.scss';

export const EnterCodeForm: React.FC<EnterCodeFormProps> = ({
    setFormType,
    data,
    itsResetPassword,
    setData,
    previousFormType,
}) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [timer, setTimer] = useState(30);
    const [sended, setSended] = useState(false);

    const onSubmit = async (values: EnterCodeFormValues) => {
        setLoading(true);

        const pvc = values.join('');

        if (itsResetPassword) {
            await onResetPasswordSubmit(
                pvc,
                data as RecoveryPassType,
                errors as { code?: string },
                setFormType,
                setData as Dispatch<SetStateAction<RecoveryPassType | null>>
            );
            toast('Пароль успешно изменён', successToastConfig);
        } else {
            await onRegisterSubmit(
                pvc,
                data as RegisterFormTypes,
                errors as { code?: string },
                router
            );
        }

        setLoading(false);
    };

    const {
        values,
        errors,
        submitForm,
        resetForm,
        isValid,
        setFieldError,
        validateForm,
        setValues,
        handleSubmit,
    } = useFormik<EnterCodeFormValues>({
        initialValues: ['', '', '', '', '', ''],
        onSubmit,
        validate: EnterCodeFormValidate,
    });

    useEffect(() => {
        if (sended) {
            const timeout = setTimeout(() => {
                if (timer > 1) {
                    setTimer((t) => t - 1);
                    clearTimeout(timeout);
                } else {
                    setSended(false);
                    setTimer(30);
                    clearTimeout(timeout);
                }
            }, 1000);
        }
    }, [sended, timer]);

    useEffect(() => {
        if (isValid) {
            if (isFullFilled(values)) {
                submitForm();
            }
        }
    }, [isValid, submitForm, values]);

    return (
        <section className={scss.form_wrapper}>
            <form className={scss.form} onSubmit={handleSubmit}>
                <div className={scss.form_title_wrapper}>
                    <RayArrow onClick={() => setFormType(previousFormType)} />
                    <h2>
                        {itsResetPassword
                            ? 'Восстановление пароля'
                            : 'Подтверждение email'}
                    </h2>
                </div>
                <p className={scss.pin_description}>
                    Введите код, отправленный на{' '}
                    <span>{data?.email ?? 'test@mail.ru'}</span>
                </p>
                <PinCodeInput
                    validateForm={validateForm}
                    errors={errors as FormikErrors<{ code: string }>}
                    digits={values}
                    changeHandler={setValues}
                />
                <div className={scss.bottom_wrapper}>
                    <p
                        style={{
                            width: 'max-content',
                            pointerEvents: sended ? 'none' : 'auto',
                        }}
                        onClick={async () => {
                            resetForm();
                            setFieldError('code', '');
                            setSended(true);
                            await checkEmail(
                                data?.email as string,
                                itsResetPassword
                                    ? 'change_password'
                                    : 'register'
                            );
                        }}
                        className={scss.form_send_again}
                    >
                        {sended
                            ? `Повторный код можно отправить через ${timer}`
                            : 'Отправить ещё раз'}
                    </p>
                    {loading && <Spinner className={scss.loading_spinner} />}
                </div>
            </form>
        </section>
    );
};
