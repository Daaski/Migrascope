'use client';
import { Dispatch, SetStateAction, useRef, useState } from 'react';

import { LoginForm } from 'app/(Login)/login/components/LoginForm';
import { PasswordRecoveryForm } from 'app/(Login)/login/components/PasswordRecoveryForm';
import { RegisterForm } from 'app/(Login)/login/components/RegisterForm';
import { EnterCodeForm } from 'app/(Login)/login/components/EnterCodeForm';
import { NewPasswordForm } from 'app/(Login)/login/components/NewPasswordForm';

import { FormType } from 'app/(Login)/login/components/types';
import {
    RecoveryPassType,
    RegisterFormTypes,
} from 'app/(Login)/login/components/RegisterForm/types';

export const FormsWrapper = () => {
    const [data, setData] = useState<
        RegisterFormTypes | RecoveryPassType | null
    >(null);

    const [formType, setFormType] = useState<FormType>('login');

    const previousFormType = useRef<FormType>('login');

    switch (formType) {
        case 'login':
            return (
                <LoginForm
                    previousFormType={previousFormType}
                    setFormType={setFormType}
                />
            );

        case 'register':
            return (
                <RegisterForm
                    data={data as RegisterFormTypes}
                    previousFormType={previousFormType}
                    setData={setData}
                    setFormType={setFormType}
                />
            );

        case 'passRecovery':
            return (
                <PasswordRecoveryForm
                    data={data as RecoveryPassType}
                    setData={
                        setData as Dispatch<
                            SetStateAction<RecoveryPassType | null>
                        >
                    }
                    previousFormType={previousFormType}
                    setFormType={setFormType}
                />
            );

        case 'enterCode':
            return (
                <EnterCodeForm
                    previousFormType={previousFormType.current}
                    itsResetPassword={false}
                    data={data}
                    setFormType={setFormType}
                />
            );
        case 'enterCodeReset':
            return (
                <EnterCodeForm
                    setData={
                        setData as Dispatch<
                            SetStateAction<RecoveryPassType | null>
                        >
                    }
                    itsResetPassword={true}
                    setFormType={setFormType}
                    data={data}
                    previousFormType={previousFormType.current}
                />
            );
        case 'enterNewPassword':
            return (
                <NewPasswordForm
                    previousFormType={previousFormType}
                    setData={
                        setData as Dispatch<SetStateAction<RecoveryPassType>>
                    }
                    data={data}
                    setFormType={setFormType}
                />
            );
    }
};
