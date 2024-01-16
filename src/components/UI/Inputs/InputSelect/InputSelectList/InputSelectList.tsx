import React from 'react';

import { motion, MotionValue } from 'framer-motion';

import Spinner from '/public/svg/spinner.svg';

import scss from '../InputSelect.module.scss';

interface ListProps {
    list: { id: number; name: string }[];
    handleSetData: (id: number) => void;
    opacity: MotionValue<string>;
    loading?: boolean;
}

export const InputSelectList: React.FC<ListProps> = ({
    list,
    handleSetData,
    loading,
    opacity,
}) => {
    return (
        <motion.ul
            style={{ opacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={scss.list_wrapper}
        >
            {list.length !== 0 ? (
                list?.map((item) => (
                    <li
                        className={scss.list_item}
                        onClick={() => handleSetData(item.id)}
                        key={item.id}
                    >
                        {item.name}
                    </li>
                ))
            ) : loading ? (
                <div className={scss.spinner_wrapper}>
                    <Spinner className={scss.loading_spinner} />
                </div>
            ) : (
                <li className={scss.list_empty}>Не найдено</li>
            )}
        </motion.ul>
    );
};
