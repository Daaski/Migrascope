import scss from './News.module.scss';

export const NewsSkeleton = () => {
    return (
        <aside className={scss.news_skeleton}>
            <div className={scss.news_skeleton_title} />
            {Array.from({ length: 5 }).map((_, index) => (
                <div
                    data-islast={index + 1 === 5}
                    key={index}
                    className={scss.news_skeleton_item}
                >
                    <div className={scss.item_svg} />
                    <div className={scss.item_content}>
                        <div className={scss.item_content_title} />
                        <div className={scss.item_content_elements} />
                        <div className={scss.item_content_elements} />
                    </div>
                    <div className={scss.item_avatar} />
                </div>
            ))}
            <div className={scss.shimmer} />
        </aside>
    );
};
