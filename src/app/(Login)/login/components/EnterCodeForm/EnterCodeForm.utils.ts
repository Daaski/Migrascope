import { EnterCodeFormValues } from 'app/(Login)/login/components/EnterCodeForm/types';
import {
    RecoveryPassType,
    RegisterFormTypes,
} from 'app/(Login)/login/components/RegisterForm/types';

import { AxiosError } from 'axios';
import {
    ChangePasswordAction,
    RegisterAction,
} from 'app/(Login)/login/actions';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { FormType } from 'app/(Login)/login/components/types';
import { Dispatch, SetStateAction } from 'react';

export const EnterCodeFormValidate = (values: EnterCodeFormValues) => {
    const errors: { code?: string } = {};

    return errors;
};

export function isFullFilled(str: string[]) {
    return str.every((el) => /\d/g.test(el));
}

export const onResetPasswordSubmit = async (
    pvc: string,
    data: RecoveryPassType,
    errors: { code?: string },
    setFormType: (v: FormType) => void,
    setData: Dispatch<SetStateAction<RecoveryPassType | null>>
) => {
    try {
        const userBody = { ...(data as Required<RecoveryPassType>), pvc };

        const result = await ChangePasswordAction(userBody);

        if (result) {
            setFormType('login');
            setData(null);
        }
    } catch (e) {
        if (e instanceof Error) {
            console.log(JSON.parse(e.message));
        }
    }
};

export const onRegisterSubmit = async (
    pvc: string,
    data: RegisterFormTypes,
    errors: { code?: string },
    router: AppRouterInstance
) => {
    try {
        const userBody = { ...(data as RegisterFormTypes), pvc };

        const user = await RegisterAction(userBody);

        router.replace('/');
    } catch (e) {
        if (e instanceof Error) {
            console.log(JSON.parse(e.message));
        }
    }
};
