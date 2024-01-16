'use client';

import React from 'react';

import { BlankItemProps } from 'app/(Main)/forms/components/Blanks/types';

import NotificationSvg from '/public/svg/notifications.svg';

import scss from 'app/(Main)/forms/components/Blanks/Blanks.module.scss';

export const BlanksItem: React.FC<BlankItemProps> = ({ name }) => {
    return (
        <li className={scss.blank_item}>
            <div className={scss.blank_item_name}>
                <NotificationSvg className={scss.notification_svg} />
                <p>{name}</p>
            </div>
            <button className={scss.download_link}>Скачать бланк</button>
        </li>
    );
};
