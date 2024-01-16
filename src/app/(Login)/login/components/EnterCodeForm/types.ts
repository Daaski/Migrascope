import { FormType } from 'app/(Login)/login/components/types';
import {
    RecoveryPassType,
    RegisterFormTypes,
} from 'app/(Login)/login/components/RegisterForm/types';
import { Dispatch, SetStateAction } from 'react';

export interface EnterCodeFormProps {
    itsResetPassword: boolean;
    setFormType: (v: FormType) => void;
    data: RegisterFormTypes | RecoveryPassType | null;
    previousFormType: FormType;
    setData?: Dispatch<SetStateAction<RecoveryPassType | null>>;
}

export type EnterCodeFormValues = string[];
