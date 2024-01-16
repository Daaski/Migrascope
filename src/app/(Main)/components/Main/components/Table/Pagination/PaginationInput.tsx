import React, {
    ChangeEvent,
    EventHandler,
    KeyboardEvent,
    useEffect,
    useState,
} from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Input } from 'components/UI/Inputs/Input';

import scss from 'app/(Main)/components/Main/components/Table/Table.module.scss';

export const PaginationInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const currentPage = Number(searchParams.get('page')) || 1;

    const [inputValue, setInputValue] = useState(currentPage.toString());

    useEffect(() => {
        setInputValue(currentPage.toString());
    }, [currentPage]);

    const handleEnterKey: EventHandler<KeyboardEvent<Element>> = (e) => {
        if (e.key === 'Enter') {
            const params = new URLSearchParams(searchParams);
            params.set('page', inputValue);
            router.replace(pathname + `?${params.toString()}`, {
                scroll: false,
            });
        }
    };

    const handleChangePage = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    return (
        <div className={scss.pagination_input}>
            <p>Страница</p>
            <Input
                onBlur={() => {
                    setInputValue(currentPage.toString());
                }}
                onKeyDown={handleEnterKey}
                type="number"
                value={inputValue}
                name="input page"
                onChange={handleChangePage}
                needErrorLabel={false}
            />
        </div>
    );
};
