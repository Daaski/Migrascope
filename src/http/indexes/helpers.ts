import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { snakeToCamelCaseDeep } from 'utils/snakeTOCamelCaseDeep';
import { toast } from 'react-toastify';
import { errorToastOptions, warningToastConfig } from 'config/toastConfig';

import CookiesUniversal from 'universal-cookie';

const cookiesUni = new CookiesUniversal();

export const toCamelCase = (res: AxiosResponse) => {
    if (res.data) snakeToCamelCaseDeep(res.data);
    return res;
};

export const setClientBearer = (req: InternalAxiosRequestConfig) => {
    const accessToken = cookiesUni.get('access');

    req.headers.set('Authorization', `Bearer ${accessToken}`);
    return req;
};

export const handleStatus = (error: AxiosError) => {
    const status = error.response?.status as number;
    if (status === 403) {
        toast('Недостаточно прав', warningToastConfig);
    } /*else if (status >= 400 && status < 500) {
        toast('Ошибка', errorToastOptions);
    } */ else if (status >= 500) {
        toast('Ошибка сервера', errorToastOptions);
    }
    throw error;
};
