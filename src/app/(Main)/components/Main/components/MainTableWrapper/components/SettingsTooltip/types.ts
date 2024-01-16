import { MotionValue } from 'framer-motion';

export interface SettingsMenuProps {
    opacity: MotionValue<number>;
    visible: boolean;
    setVisible: (v: boolean) => void;
}

export interface UserType {
    id: number;
    name: string;
}

export interface RolesType {
    owner: boolean;
    admin: boolean;
    observer: boolean;
}
