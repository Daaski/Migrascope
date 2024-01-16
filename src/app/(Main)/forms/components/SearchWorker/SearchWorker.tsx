'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useDebouncedFunction from 'hooks/useDebouncedFunction';

import { InputSelect } from 'components/UI/Inputs/InputSelect';

import { SearchParamsHelper } from 'utils/searchParamsHelper';

import scss from './SearchWorker.module.scss';

export const SearchWorker = () => {
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    const searchHelper = new SearchParamsHelper(searchParams.entries);

    const [searchValue, setSearchValue] = useState<string>('');

    const debouncedQueryChange = useDebouncedFunction(
        handleQueryChange,
        500,
        true
    );

    function handleQueryChange(searchString: string) {
        searchHelper.set('search', searchString);
        router.replace(searchHelper.getParams, { scroll: false });
        setLoading(false);
    }

    const handleSearch = (value: string) => {
        setSearchValue(value);
        setLoading(true);
        debouncedQueryChange(value);
    };

    return (
        <section className={scss.search_worker_wrapper}>
            <h3 className={scss.search_title}>
                Для поиска введите ФИО сотрудника
            </h3>
            <InputSelect
                autoComplete="off"
                loading={loading}
                listValues={[]}
                value={searchValue}
                fetchable={true}
                clearable={true}
                placeholder="Поиск"
                needErrorLabel={false}
                name="search"
                onChange={handleSearch}
            />
        </section>
    );
};
