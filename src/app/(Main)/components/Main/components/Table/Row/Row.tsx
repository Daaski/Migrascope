'use client';

import React from 'react';

import { ColumnRowProps } from 'app/(Main)/components/Main/components/Table/types';

import scss from 'app/(Main)/components/Main/components/Table/Table.module.scss';

export const Row: React.FC<ColumnRowProps> = ({ item, headers }) => {
    return headers.map((header, index) => (
        <td className={scss.row_td} key={index}>
            {item[header.field]}
        </td>
    ));
};
