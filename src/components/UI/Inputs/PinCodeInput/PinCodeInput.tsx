import React, { useRef, useEffect, KeyboardEvent } from 'react';

import { IPinCodeInputProps } from 'components/UI/Inputs/PinCodeInput/types';

import scss from './PinCodeInput.module.scss';

const onlyDigitsRegex = /^\d+$/;

export const PinCodeInput: React.FC<IPinCodeInputProps> = ({
    digits,
    validateForm,
    changeHandler,
    errors,
}) => {
    const length = digits.length;
    // здесь будут ссылки на input-элементы
    const inputRefs = useRef<HTMLInputElement[]>([]);

    useEffect(() => {
        inputRefs.current[0].focus();
    }, []);

    const handleKeyDown = (
        index: number,
        event: KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === 'Backspace') {
            if (digits[index].match(/^[0-9]$/)) {
                // если элемент массива digits содержит цифру, то при нажатии клавиши
                // вызываем callback-функцию родителя, чтобы записать пустую строку
                const newDigits = [...digits]; // копия digits
                newDigits[index] = '';
                changeHandler(newDigits, true);
                if (index > 0) inputRefs.current[index - 1].focus();
            } else {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    const handlePaste = async (
        event: React.ClipboardEvent<HTMLInputElement>
    ) => {
        event.preventDefault();
        let pasteValue = event.clipboardData.getData('text/plain');

        if (!onlyDigitsRegex.test(pasteValue)) {
            return;
        }

        if (pasteValue.length > length) {
            pasteValue = pasteValue.slice(0, length);
        }

        if (pasteValue.length > 1) {
            const coppiedValues = pasteValue.split('');
            const newDigits = [...digits];
            coppiedValues.forEach((el, index) => {
                newDigits[index] = el;
            });
            await changeHandler(newDigits);
            if (coppiedValues.length === length) {
                inputRefs.current[length - 1].blur();
            } else {
                inputRefs.current[coppiedValues.length].focus();
            }
            return;
        }
    };

    const handleChange = async (index: number, newValue: string) => {
        if (!onlyDigitsRegex.test(newValue)) {
            return;
        }

        const oldDigit = digits[index];
        // старую цифру в поле ввода убираем, оставляя только новую
        const newDigit = newValue.trim().replace(oldDigit, '');
        // теперь вызываем callback родителя, чтобы обовить digits
        const newDigits = [...digits]; // копия digits
        newDigits[index] = newDigit;
        await changeHandler(newDigits);
        // смещаем фокус на следующее поле для ввода следующей цифры
        if (index < length - 1) {
            inputRefs.current[index + 1].focus();
        } else {
            // или убираем фокус, если это было последнее поле
            inputRefs.current[index].blur();
        }
    };
    return (
        <div className={scss.pin_code_input_wrapper}>
            <div className={scss.inputs_wrapper}>
                {digits.map((digit, index) => {
                    const lastIndex = digits.findLastIndex((el) => el);
                    let indexOfLastNumber = 0;

                    const hasLastNumber = !!digits[length - 1];
                    const hasFirstNumber = !!digits[0];

                    let disabled = false;

                    if (!hasFirstNumber) {
                        indexOfLastNumber = 0;
                        disabled = index > 0;
                    } else if (hasLastNumber) {
                        indexOfLastNumber = lastIndex;
                        disabled = index < lastIndex;
                    } else {
                        indexOfLastNumber = lastIndex + 1;
                        disabled =
                            index >= indexOfLastNumber + 1 ||
                            index <= indexOfLastNumber - 2;
                    }

                    return (
                        <input
                            key={index}
                            className={
                                errors.code
                                    ? scss.input_cell_error
                                    : scss.input_cell
                            }
                            data-isdisabled={disabled}
                            value={digit}
                            onPaste={(event) => handlePaste(event)}
                            onBlur={() => validateForm()}
                            onChange={(event) => {
                                if (disabled) {
                                    return;
                                }
                                handleChange(index, event.target.value);
                            }}
                            onClick={() => {
                                if (disabled) {
                                    inputRefs.current[
                                        indexOfLastNumber
                                    ].focus();
                                }
                            }}
                            onKeyDown={(event) => {
                                if (disabled) {
                                    return;
                                }
                                handleKeyDown(index, event);
                            }}
                            ref={(element) =>
                                (inputRefs.current[index] =
                                    element as HTMLInputElement)
                            }
                        />
                    );
                })}
            </div>
            {errors.code && (
                <label
                    style={{ textAlign: 'center' }}
                    className={scss.input_error_label}
                >
                    {errors.code}
                </label>
            )}
        </div>
    );
};
