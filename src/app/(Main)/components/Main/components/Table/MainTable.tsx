'use client';

import React, { useState, createContext, memo } from 'react';

import { ColumnHeader } from 'app/(Main)/components/Main/components/Table/ColumnHeader/ColumnHeader';
import { Row } from 'app/(Main)/components/Main/components/Table/Row/Row';
import { Pagination } from 'app/(Main)/components/Main/components/Table/Pagination';
import { TableSkeleton } from 'app/(Main)/components/Sceletons/Skeletons';

import {
    IHeader,
    ITableContext,
    TableProps,
} from 'app/(Main)/components/Main/components/Table/types';

import scss from './Table.module.scss';

export const TableContext = createContext<ITableContext | null>(null);

export const MainTable = memo(function MemoTable({
    tableData,
    children,
    paginationData,
}: TableProps) {
    const [headers, setHeaders] = useState<IHeader[]>([]);

    return (
        <>
            {headers.length === 0 && <TableSkeleton withoutTitle />}
            <div className={scss.table_wrapper}>
                <table className={scss.table}>
                    <thead className={scss.table_headers}>
                        <tr>
                            {headers.map((el, index) => (
                                <ColumnHeader
                                    key={index}
                                    headerName={el.name}
                                />
                            ))}
                        </tr>
                    </thead>
                    <TableContext.Provider
                        value={{
                            setHeaders,
                        }}
                    >
                        <tbody className={scss.table_body}>
                            {tableData.map((item, index) => {
                                return (
                                    <tr key={index} className={scss.table_row}>
                                        <Row item={item} headers={headers} />
                                    </tr>
                                );
                            })}
                        </tbody>
                        {children}
                    </TableContext.Provider>
                </table>
            </div>
            {paginationData?.totalPages && (
                <Pagination totalPages={paginationData.totalPages} />
            )}
        </>
    );
});
