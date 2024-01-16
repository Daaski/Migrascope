import {
    AuthUser,
    ChangePassword,
    RegisterUser,
} from 'http/accountService/types';
import { $account } from 'http/indexes/clientIndex';
import { AxiosResponse } from 'axios';
import { $serverAccount } from 'http/indexes/serverIndex';

export const registerUser: RegisterUser = async (body) => {
    const res: AxiosResponse<ReturnType<typeof registerUser>> =
        await $serverAccount.post('create/', body);

    return res.data;
};

export const changePassword: ChangePassword = async (body) => {
    const res: AxiosResponse<ReturnType<typeof changePassword>> =
        await $serverAccount.post('change-password/', body);

    return res.data;
};

export const authUser: AuthUser = async (body) => {
    const res: AxiosResponse<ReturnType<typeof authUser>> =
        await $serverAccount.post('auth/', body);

    return res.data;
};

export const checkEmail = async (
    email: string,
    place: 'change_password' | 'register'
) => {
    const res = await $account.post(`check-email/?place=${place}`, {
        email,
    });

    return res.data;
};
