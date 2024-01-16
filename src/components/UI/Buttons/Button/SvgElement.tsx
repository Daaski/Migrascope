'use client';

import { ButtonProps } from 'components/UI/Buttons/Button/types';

import PlusSvg from '/public/svg/x.svg';

import scss from './Button.module.scss';
import Spinner from '/public/svg/spinner.svg';

export const SvgElement = ({ type }: { type: ButtonProps['svg'] }) => {
    switch (type) {
        case 'loading':
            return <Spinner className={scss.button_spinner} />;
        case 'plus':
            return (
                <PlusSvg
                    style={{
                        rotate: '45deg',
                        width: '12px',
                        height: '12px',
                        top: 'calc(50% - 6px)',
                    }}
                    className={scss.svg_element}
                />
            );
    }
};
