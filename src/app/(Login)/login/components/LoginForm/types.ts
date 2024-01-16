import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import { FormType } from 'app/(Login)/login/components/types';
import {
    RecoveryPassType,
    RegisterFormTypes,
} from 'app/(Login)/login/components/RegisterForm/types';

export interface ILoginFormTypes {
    email: string;
    password: string;
    remember: boolean;
}

export interface FormProps {
    setFormType: Dispatch<SetStateAction<FormType>>;
    setData: Dispatch<
        SetStateAction<RegisterFormTypes | RecoveryPassType | null>
    >;
    previousFormType: MutableRefObject<FormType>;
}

export interface LoginFormProps extends Omit<FormProps, 'setData'> {}
