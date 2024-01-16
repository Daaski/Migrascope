'use client';

import NotificationSvg from '/public/svg/notifications.svg';

import scss from './Notifications.module.scss';

export const Notifications = () => {
    return (
        <div className={scss.notifications_container}>
            <NotificationSvg className={scss.svg} />
        </div>
    );
};
