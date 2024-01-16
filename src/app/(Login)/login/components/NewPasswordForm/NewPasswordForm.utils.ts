import { NewPasswordFormValues } from 'app/(Login)/login/components/NewPasswordForm/types';
import { checkStringForDigitsAndLetters } from 'app/(Login)/login/helpers/helpers';

export const NewPasswordFormValidate = (values: NewPasswordFormValues) => {
    const errors: Partial<NewPasswordFormValues> = {};

    if (!values.password) {
        errors.password = 'Укажите пароль';
    } else if (!checkStringForDigitsAndLetters(values.password)) {
        errors.password = 'Пароль должен содержать буквы и цифры';
    } else if (values.password.length < 8) {
        errors.password = 'Пароль должен содержать минимум 8 символов';
    } else if (!values.confirmPassword) {
        errors.confirmPassword = 'Обязательное поле';
    } else if (values.confirmPassword !== values.password) {
        errors.password = 'Пароли не совпадают';
        errors.confirmPassword = 'Пароли не совпадают';
    }

    return errors;
};
