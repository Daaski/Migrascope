import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { PaginationNumber } from 'app/(Main)/components/Main/components/Table/Pagination/PaginationNumber';

import { generatePagination } from 'utils/generatePagination';

import { PaginatorProps } from 'app/(Main)/components/Main/components/Table/types';
import { PaginationInput } from 'app/(Main)/components/Main/components/Table/Pagination/PaginationInput';

import ArrowSvg from '/public/svg/arrow.svg';

import scss from '../Table.module.scss';

export const Pagination: React.FC<PaginatorProps> = ({ totalPages }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());

        return `${pathname}?${params.toString()}`;
    };

    const allPages = generatePagination(currentPage, totalPages);

    return (
        <div className={scss.pagination_container}>
            <PaginationInput />
            <div className={scss.pagination_numbers}>
                <Link
                    data-isdisabled={currentPage === 1}
                    className={scss.arrow_wrapper}
                    scroll={false}
                    href={createPageURL(currentPage - 1)}
                >
                    <ArrowSvg />
                </Link>
                {allPages.map((page, index) => {
                    return (
                        <PaginationNumber
                            key={index}
                            href={createPageURL(page)}
                            page={page}
                            isActive={currentPage === page}
                        />
                    );
                })}
                <Link
                    scroll={false}
                    data-isdisabled={currentPage === totalPages}
                    className={scss.arrow_wrapper}
                    href={createPageURL(currentPage + 1)}
                >
                    <ArrowSvg />
                </Link>
            </div>
        </div>
    );
};
