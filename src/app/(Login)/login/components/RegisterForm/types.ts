import { FormProps } from 'app/(Login)/login/components/LoginForm/types';

export interface RegisterFormTypes {
    name: string;
    surname: string;
    patronymic: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    remember: boolean;
}

export interface RecoveryPassType {
    email: string;
    pvc?: string;
    password?: string;
    confirmPassword?: string;
    errors?: { password?: string };
}

export interface RegisterUserAction extends RegisterFormTypes {
    pvc: string;
}

export interface RegisterFormProps extends FormProps {
    data: RegisterFormTypes;
}
