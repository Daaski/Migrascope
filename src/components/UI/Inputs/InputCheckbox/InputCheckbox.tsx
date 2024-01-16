import { InputCheckboxProps } from './InputCheckbox.types';

import css from './InputCheckbox.module.scss';
import clsx from 'clsx';

export const InputCheckbox = ({
    name,
    label,
    value,
    onChange,
}: InputCheckboxProps) => {
    const fontClass = clsx({
        [css.input_description]: true,
    });

    return (
        <div className={css.input_container}>
            <div className={css.input_wrapper}>
                <label
                    htmlFor={name}
                    className={
                        value ? css.pseudo_input_active : css.pseudo_input
                    }
                >
                    <input
                        id={name}
                        className={css.input}
                        onChange={() => {
                            onChange(!value);
                        }}
                        name={name}
                        type="checkbox"
                        checked={value}
                    />
                </label>
                {label && (
                    <label className={fontClass} htmlFor={name}>
                        {label}
                    </label>
                )}
            </div>
        </div>
    );
};
