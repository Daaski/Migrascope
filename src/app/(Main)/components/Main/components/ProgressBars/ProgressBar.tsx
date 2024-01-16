'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { drawSettings } from 'app/(Main)/components/Main/components/ProgressBars/Progressbar.utils';

import { ProgressBarProps } from 'app/(Main)/components/Main/components/ProgressBars/types';

import scss from './ProgressBars.module.scss';

export const ProgressBar: React.FC<ProgressBarProps> = ({
    title,
    percentage,
    color,
    custom,
}) => {
    const draw = drawSettings(percentage);

    return (
        <motion.div
            custom={custom}
            initial="initialBg"
            animate="visibleBg"
            className={scss.bar}
        >
            <motion.svg
                initial="hidden"
                animate="visible"
                className={scss.bar_circle}
                viewBox="0 0 185 185"
            >
                <motion.circle
                    cx="92"
                    cy="92"
                    r="80"
                    strokeWidth="8"
                    strokeLinecap="round"
                    style={{
                        rotate: -90,
                        scaleX: -1,
                    }}
                    stroke={color}
                    variants={draw}
                />
            </motion.svg>
            <motion.svg
                className={scss.bar_circle_bg}
                variants={draw}
                viewBox="0 0 185 185"
            >
                <motion.circle
                    cx="92"
                    cy="92"
                    r="80"
                    stroke="#EEEEEE"
                    strokeLinecap="round"
                    custom={custom}
                />
            </motion.svg>
            <motion.span
                variants={draw}
                custom={custom}
                className={scss.bar_amount}
            >
                {percentage + '%'}
            </motion.span>
            <motion.p
                variants={draw}
                custom={custom}
                className={scss.bar_title}
            >
                {title}
            </motion.p>
        </motion.div>
    );
};
