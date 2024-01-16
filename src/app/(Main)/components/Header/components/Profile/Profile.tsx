'use client';

import AvatarSvg from '/public/svg/profile.svg';

import scss from './Profile.module.scss';

export const Profile = () => {
    return <AvatarSvg className={scss.header_profile} />;
};
