'use client';

import React from 'react';

import { EventSvg } from 'components/News/components/EventSvg';

import { getTimeDescription, getTitleDesc } from 'components/News/utils';

import { NewsItemProps } from 'components/News/types';

import AvatarSvg from 'components/News/svg/Avatar.svg';

import scss from 'components/News/News.module.scss';

export const NewsItem: React.FC<NewsItemProps> = ({
    type,
    avatar,
    username,
    time,
    title,
    userTo,
    platform,
    last,
}) => {
    return (
        <div data-islast={last} className={scss.event_wrapper}>
            <EventSvg type={type} />
            <div className={scss.event_content}>
                <p className={scss.event_description}>
                    <span className={scss.event_type}>
                        {getTitleDesc(type, username, userTo) + ': '}
                    </span>
                    {`"${title}"`}
                </p>
                <p className={scss.event_platform}>
                    в <span>{platform}</span>
                </p>
                <span className={scss.event_time}>
                    {getTimeDescription(time)}
                </span>
            </div>
            <AvatarSvg className={scss.event_user_image} />
        </div>
    );
};
