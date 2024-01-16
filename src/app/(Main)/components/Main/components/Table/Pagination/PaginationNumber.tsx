import React from 'react';
import Link from 'next/link';

import { PaginatorButtonProps } from 'app/(Main)/components/Main/components/Table/types';

import clsx from 'clsx';

import scss from 'app/(Main)/components/Main/components/Table/Table.module.scss';

export const PaginationNumber: React.FC<PaginatorButtonProps> = ({
    href,
    page,
    isActive,
}) => {
    const className = clsx({
        [scss.pagination_number]: true,
    });

    if (page === '...') {
        return (
            <div style={{ pointerEvents: 'none' }} className={className}>
                {page}
            </div>
        );
    }

    return (
        <Link
            data-isactive={isActive}
            href={href}
            scroll={false}
            className={className}
        >
            {page}
        </Link>
    );
};
