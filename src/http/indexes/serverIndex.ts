'use server';

import axios from 'axios';

import { toCamelCase } from 'http/indexes/helpers';
import { setServerBearer } from 'http/indexes/serverHelper';

export const $serverAccount = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ACCOUNT_API_URL,
});

export const $serverOrganization = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ORGANIZATION_API_URL,
});

[$serverAccount, $serverOrganization].forEach((instance) => {
    instance.interceptors.request.use(async (req) => setServerBearer(req));
    instance.interceptors.response.use((res) => toCamelCase(res));
});
