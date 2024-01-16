import { PasswordRecoveryFormTypes } from 'app/(Login)/login/components/PasswordRecoveryForm/types';
import { isEmailValid } from 'utils/isEmailValid';

export const PasswordRecoveryValidate = (values: PasswordRecoveryFormTypes) => {
    const errors: Partial<PasswordRecoveryFormTypes> = {};

    if (!values.email) {
        errors.email = 'Укажите почту';
    } else if (!isEmailValid(values.email)) {
        errors.email = 'Неккоректная почта';
    }

    return errors;
};
