'use client';

import SearchSvg from '/public/svg/search.svg';

import scss from './Search.module.scss';

export const Search = () => {
    return (
        <div className={scss.search_container}>
            <SearchSvg className={scss.svg} />
        </div>
    );
};
