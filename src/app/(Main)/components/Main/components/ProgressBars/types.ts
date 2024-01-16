export interface ProgressBarsType {
    title: string;
    percentage: number;
    color: string;
}

export interface ProgressBarsProps {
    barsData: ProgressBarsType[];
}

export interface ProgressBarProps extends ProgressBarsType {
    custom: number;
}
