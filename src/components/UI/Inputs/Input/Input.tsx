'use client';

import React, { ChangeEventHandler, useMemo, useState } from 'react';
import clsx from 'clsx';

import { IInputProps } from 'components/UI/Inputs/Input/types';

import OpenEye from 'components/UI/svg/eye.svg';
import HiddenEye from 'components/UI/svg/eyeHidden.svg';
import XSvg from '/public/svg/x.svg';

import scss from 'components/UI/Inputs/Input/Input.module.scss';

export const Input: React.FC<IInputProps> = ({
    type = 'text',
    placeholder,
    autoFocus,
    value,
    name,
    clearable,
    handleError,
    onChange,
    onKeyDown,
    onBlur,
    autoComplete,
    disabled,
    tabIndex,
    label,
    needErrorLabel = true,
    changePasswordVisibility,
    required = false,
    size = 'default',
}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const passType = useMemo(() => {
        return passwordVisible ? 'text' : type;
    }, [passwordVisible, type]);

    const handleVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const fieldClass = clsx({
        [scss.field_without_error_label]: !needErrorLabel,
        [scss.field_without_label]: !label,
        [scss.field_with_label]: size !== 'big' && label && needErrorLabel,
        [scss.field_with_label_big]: size === 'big' && label && needErrorLabel,
        [scss.field_search]: name === 'search',
        [scss.field_big]: size === 'big',
    });
    const labelErrorClass = clsx({
        [scss.input_error_label]: handleError,
    });

    const labelClass = clsx({
        [scss.input_label]: label,
    });

    const inputClass = clsx({
        [scss.input]: true,
        [scss.input_big]: size === 'big',
        [scss.input_error]: handleError,
        [scss.input_search]: name === 'search',
    });
    const handleClearClick = () => {
        onChange('' as any);
    };

    return (
        <div className={fieldClass}>
            {label ? (
                <label htmlFor={name} className={labelClass}>
                    {label}
                    {required && (
                        <span className={scss.required_indicator}>*</span>
                    )}
                </label>
            ) : (
                <label className={labelErrorClass}>{handleError}</label>
            )}
            <div className={scss.input_svg_wrapper}>
                <input
                    onKeyDown={onKeyDown}
                    tabIndex={tabIndex}
                    autoComplete={autoComplete as string}
                    className={inputClass}
                    type={passType}
                    onChange={onChange as ChangeEventHandler<HTMLInputElement>}
                    value={value}
                    autoFocus={autoFocus}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    disabled={disabled}
                />
                {changePasswordVisibility && (
                    <div
                        className={scss.eye_wrapper}
                        onClick={() => handleVisibility()}
                    >
                        {passwordVisible ? <HiddenEye /> : <OpenEye />}
                    </div>
                )}
            </div>

            {clearable && value && (
                <div className={scss.clear_wrapper}>
                    <XSvg
                        onClick={() => handleClearClick()}
                        className={scss.custom_svg}
                    />
                </div>
            )}
            {label && <label className={labelErrorClass}>{handleError}</label>}
        </div>
    );
};
