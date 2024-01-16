'use client';

import ProfileSvg from '/public/svg/profile.svg';

import scss from 'components/Profile/Profile.module.scss';

export const ProfileSvgWrapper = () => {
    return <ProfileSvg className={scss.profile_avatar} />;
};
