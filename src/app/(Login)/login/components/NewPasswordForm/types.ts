import { RecoveryPassType } from 'app/(Login)/login/components/RegisterForm/types';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { FormType } from 'app/(Login)/login/components/types';

export interface NewPasswordFormProps {
    data: RecoveryPassType | null;
    setData: Dispatch<SetStateAction<RecoveryPassType>>;
    previousFormType: MutableRefObject<FormType>;
    setFormType: Dispatch<SetStateAction<FormType>>;
}

export interface NewPasswordFormValues {
    password: string;
    confirmPassword: string;
}
