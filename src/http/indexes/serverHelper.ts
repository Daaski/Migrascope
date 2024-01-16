import { cookies } from 'next/headers';
import { InternalAxiosRequestConfig } from 'axios';

export const setServerBearer = (req: InternalAxiosRequestConfig<any>) => {
    const cookieStore = cookies();

    const accessToken = cookieStore?.get('access')?.value;

    req.headers.set('Authorization', `Bearer ${accessToken}`);
    return req;
};
