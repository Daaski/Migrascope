'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { SearchParamsHelper } from 'utils/searchParamsHelper';

import { Input } from 'components/UI/Inputs/Input';
import useDebouncedFunction from 'hooks/useDebouncedFunction';

export const SearchTableInput = () => {
    const query = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const queryHelper = new SearchParamsHelper(query.entries);

    const searchValue = query.get('search') ?? '';

    const [inputValue, setInputValue] = useState(searchValue);

    const debouncedQueryChange = useDebouncedFunction(
        handleQueryChange,
        500,
        true
    );

    function handleQueryChange(value: string) {
        queryHelper.set('search', value);
        router.replace(pathname + queryHelper.getParams, { scroll: false });
    }

    function handleInputValueChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setInputValue(value);

        debouncedQueryChange(value);
    }

    return (
        <Input
            needErrorLabel={false}
            name="search"
            value={inputValue}
            onChange={handleInputValueChange}
            placeholder="Поиск"
        />
    );
};
