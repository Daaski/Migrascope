import React from 'react';

import { ColumnHeaderProps } from 'app/(Main)/components/Main/components/Table/types';

import scss from 'app/(Main)/components/Main/components/Table/Table.module.scss';

export const ColumnHeader: React.FC<ColumnHeaderProps> = ({ headerName }) => {
    return <td className={scss.header_item}>{headerName}</td>;
};
