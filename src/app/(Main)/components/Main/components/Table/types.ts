import React, { ReactElement } from 'react';

export interface TableRows extends Record<string, any> {
    id: number;
}

export interface ITableContext {
    setHeaders: React.Dispatch<React.SetStateAction<IHeader[]>>;
}

export interface IHeader {
    name: string;
    field: string;
}

export interface ColumnHeaderProps {
    headerName: string;
}

interface PaginationData {
    totalPages: number;
}

export interface TableProps {
    tableData: TableRows[];
    children: ReactElement<ColumnProps> | Array<ReactElement<ColumnProps>>;
    paginationData?: PaginationData;
}

export interface ColumnProps {
    header: string;
    field: string;
}

export interface PaginatorProps {
    totalPages: number;
}

export interface ColumnRowProps {
    item: TableRows;
    headers: IHeader[];
}

export interface PaginatorButtonProps {
    page: number | string;
    href: string;
    isActive: boolean;
}
