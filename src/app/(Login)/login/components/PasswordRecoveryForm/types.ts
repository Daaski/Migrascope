import { Dispatch, MutableRefObject, SetStateAction } from 'react';

import { FormType } from 'app/(Login)/login/components/types';
import { RecoveryPassType } from 'app/(Login)/login/components/RegisterForm/types';

export interface PasswordRecoveryFormProps {
    data: RecoveryPassType | null;
    setFormType: Dispatch<SetStateAction<FormType>>;
    previousFormType: MutableRefObject<FormType>;
    setData: Dispatch<SetStateAction<RecoveryPassType | null>>;
}

export interface PasswordRecoveryFormTypes {
    email: string;
}
