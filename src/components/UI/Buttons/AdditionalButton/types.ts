export interface AdditionalButtonProps {
    size?: 'default' | 'big';
    svg: 'ellipsis' | 'sliders';
    type: HTMLButtonElement['type'];
    onClick?: () => void;
    disabled?: boolean;
}
