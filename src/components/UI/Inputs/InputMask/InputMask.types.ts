import { IInputProps } from 'components/UI/Inputs/Input/types';

export interface InputMaskProps
    extends Pick<
        IInputProps,
        | 'value'
        | 'name'
        | 'autoFocus'
        | 'onBlur'
        | 'type'
        | 'handleError'
        | 'size'
        | 'needErrorLabel'
        | 'required'
    > {
    onChange: (value: string) => void;
    alwaysShowMask: boolean | undefined;
    mask: string;
    placeholder: string;
    label: string;
    maskPlaceholder?: string;
    autoComplete?: string;
    disabled?: boolean;
}
