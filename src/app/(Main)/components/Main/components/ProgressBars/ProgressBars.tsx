import React from 'react';

import { ProgressBar } from 'app/(Main)/components/Main/components/ProgressBars/ProgressBar';

import { ProgressBarsProps } from 'app/(Main)/components/Main/components/ProgressBars/types';

import scss from './ProgressBars.module.scss';

export const ProgressBars: React.FC<ProgressBarsProps> = async ({
    barsData,
}) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return (
        <section className={scss.bars_layout}>
            <h3 className={scss.bars_title}>Прогресс по задачам</h3>
            <div className={scss.bars}>
                {barsData.map((el, index) => (
                    <ProgressBar custom={index + 1} {...el} key={index} />
                ))}
            </div>
        </section>
    );
};
