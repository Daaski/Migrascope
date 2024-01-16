'use client';

import React from 'react';

import { NewsType } from 'components/News/types';

import AttachSvg from 'components/News/svg/attach.svg';
import CommentarySvg from 'components/News/svg/commentary.svg';
import CompleteSvg from 'components/News/svg/complete.svg';
import MoveSvg from 'components/News/svg/moved.svg';

import scss from 'components/News/News.module.scss';

export const EventSvg: React.FC<{ type: NewsType['type'] }> = ({ type }) => {
    switch (type) {
        case 'addFile': {
            return (
                <div className={scss.event_svg_wrapper}>
                    <AttachSvg className={scss.event_svg} />
                </div>
            );
        }
        case 'commentary': {
            return (
                <div className={scss.event_svg_wrapper}>
                    <CommentarySvg className={scss.event_svg} />
                </div>
            );
        }
        case 'completed': {
            return (
                <div className={scss.event_svg_wrapper}>
                    <CompleteSvg className={scss.event_svg} />
                </div>
            );
        }
        case 'moved': {
            return (
                <div className={scss.event_svg_wrapper}>
                    <MoveSvg className={scss.event_svg} />
                </div>
            );
        }
    }
};
