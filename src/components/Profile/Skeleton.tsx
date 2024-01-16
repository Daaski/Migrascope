import scss from './Profile.module.scss';

export const ProfileSkeleton = () => {
    return (
        <div className={scss.profile_skeleton}>
            <div className={scss.skeleton_avatar} />
            <div className={`${scss.skeleton_data} `}>
                <div className={scss.profile_username} />
                <div className={scss.profile_email} />
            </div>
            <div className={scss.shimmer} />
        </div>
    );
};
