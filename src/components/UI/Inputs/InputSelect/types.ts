import { MotionValue } from 'framer-motion';
import { IInputProps } from 'components/UI/Inputs/Input/types';

export interface ListProps {
    list: { id: number; name: string }[];
    handleSetData: (id: number, name: string) => void;
    opacity: MotionValue<string>;
}

export interface IInputSelectProps extends Omit<IInputProps, 'onChange'> {
    listValues: { id: number; name: string }[];
    onChange: (item: any) => void;
    loading?: boolean;
    fetchable?: boolean;
    setFieldTouched?: (field: string, value: boolean) => void;
    showPrevValue?: boolean;
}
