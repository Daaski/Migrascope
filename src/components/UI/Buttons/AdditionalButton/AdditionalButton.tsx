'use client';

import React from 'react';
import clsx from 'clsx';

import { AdditionalButtonProps } from 'components/UI/Buttons/AdditionalButton/types';

import MoreSvg from 'components/UI/Buttons/AdditionalButton/svg/more.svg';
import SettingsSvg from 'components/UI/Buttons/AdditionalButton/svg/settings.svg';

import scss from './AdditionalButton.module.scss';

export const AdditionalButton: React.FC<AdditionalButtonProps> = ({
    svg,
    size = 'default',
    type,
    disabled,
    onClick,
}) => {
    const buttonClass = clsx({
        [scss.button]: true,
        [scss.button_big]: size === 'big',
    });

    return (
        <button
            disabled={disabled}
            type={type}
            className={buttonClass}
            onClick={onClick}
        >
            {svg === 'sliders' ? (
                <SettingsSvg className={scss.button_svg} />
            ) : (
                <MoreSvg className={scss.button_svg} />
            )}
        </button>
    );
};
