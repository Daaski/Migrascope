import { ChangeEventHandler, FocusEvent, KeyboardEventHandler } from 'react';

export interface IInputProps {
    value: string;
    name: string | 'search';
    size?: 'default' | 'big';
    onChange:
        | ChangeEventHandler<HTMLInputElement>
        | ChangeEventHandler<HTMLTextAreaElement>;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    autoFocus?: boolean;
    handleError?: string | boolean;
    onBlur?: (
        event: FocusEvent<HTMLInputElement> | FocusEvent<HTMLTextAreaElement>
    ) => void;
    required?: boolean;
    type?: HTMLInputElement['type'];
    changePasswordVisibility?: boolean;
    placeholder?: string;
    autoComplete?: 'on' | 'off' | 'new-password';
    disabled?: boolean;
    tabIndex?: number;
    clearable?: boolean;
    label?: string;
    needErrorLabel?: boolean;
}
