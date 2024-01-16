'use client';

import React, { useContext, useEffect } from 'react';
import {
    ColumnProps,
    ITableContext,
} from 'app/(Main)/components/Main/components/Table/types';
import { TableContext } from 'app/(Main)/components/Main/components/Table/MainTable';

export const Column: React.FC<ColumnProps> = ({ header, field }) => {
    const { setHeaders } = useContext<ITableContext | null>(
        TableContext
    ) as ITableContext;

    useEffect(() => {
        setHeaders((prevHeaders) => {
            const currentHeader = { field: field, name: header };
            if (prevHeaders.some((h) => h.name === header)) {
                return prevHeaders;
            }

            return [...prevHeaders, currentHeader];
        });
    }, [field, header, setHeaders]);

    return null;
};
