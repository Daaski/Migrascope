export interface RegisterUserBody {
    username: string;
    password: string;
    verified_password: string;
    name: string;
    surname: string;
    patronymic: string;
    phone: string;
    pvc: string;
    remember: boolean;
}

interface RegisterUserResponse {
    access: string;
    refresh: string;
    user: {
        username: string;
        name: string;
        surname: string;
        lastname: string;
    };
}

export type RegisterUser = (
    body: RegisterUserBody
) => Promise<RegisterUserResponse>;

export interface AuthUserBody {
    username: string;
    password: string;
}

export type AuthUser = (
    body: AuthUserBody
) => Promise<Omit<RegisterUserResponse, 'user'>>;

export interface ChangePasswordBody {
    pvc: string;
    email: string;
    password: string;
    verified_password: string;
}

export type ChangePassword = (body: ChangePasswordBody) => Promise<void>;
