import scss from './BlanksSkeleton.module.scss';

export const BlanksSkeleton = () => {
    return (
        <div className={scss.blanks_skeleton_wrapper}>
            {Array.from({ length: 5 }).map((_, index) => (
                <div className={scss.blank_skeleton} key={index} />
            ))}
            {Array.from({ length: 3 }).map((_, index) => (
                <div className={scss.blank_skeleton_fullhd} key={index} />
            ))}
            <div className={scss.shimmer} />
        </div>
    );
};
