'use client';

import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { AnimatePresence, motion, MotionValue, useSpring } from 'framer-motion';

import { useResizeWidth } from 'hooks/useResizeWidth';
import { onHide } from 'utils/TippyHelper';

import { AdditionalButton } from 'components/UI/Buttons/AdditionalButton';
import { SettingsMenu } from 'app/(Main)/components/Main/components/MainTableWrapper/components/SettingsTooltip/SettingsMenu';

import scss from './SettingsTooltip.module.scss';

export const SettingsTooltip = () => {
    const { phoneBreak } = useResizeWidth();

    const opacity = useSpring(0);
    const [visible, setVisible] = useState(false);

    const xOffset = phoneBreak ? -300 : -125;

    function onMount(opacity: MotionValue<number>) {
        opacity.set(1);
    }

    function onSettingsHide(opacity: MotionValue, unmount: () => void) {
        onHide({ opacity, unmount });
    }

    return (
        <>
            <div className={scss.settings_tippy_wrapper}>
                <Tippy
                    onMount={() => onMount(opacity)}
                    onHide={({ unmount }) => onSettingsHide(opacity, unmount)}
                    animation={true}
                    interactive={true}
                    visible={visible}
                    offset={[xOffset, 10]}
                    placement="bottom-start"
                    onClickOutside={() => setVisible(!visible)}
                    render={(attrs) => (
                        <SettingsMenu
                            visible={visible}
                            setVisible={setVisible}
                            opacity={opacity}
                            {...attrs}
                        />
                    )}
                >
                    <div>
                        <AdditionalButton
                            onClick={() => setVisible(!visible)}
                            svg="sliders"
                            type="button"
                        />
                    </div>
                </Tippy>
                <AnimatePresence>
                    {visible && (
                        <motion.span
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={scss.body_gray}
                        />
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};
