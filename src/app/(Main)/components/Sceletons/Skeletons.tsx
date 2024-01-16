import scss from './Skeletons.module.scss';

export const BarsSkeleton = () => {
    return (
        <>
            <div className={scss.bars_skeleton_wrapper}>
                <div className={scss.bars_skeleton}>
                    <div className={scss.shimmer} />
                </div>
            </div>
        </>
    );
};

export const TableSkeleton = ({
    withoutTitle = false,
}: {
    withoutTitle?: boolean;
}) => {
    return (
        <div className={scss.skeleton_table_wrapper}>
            {!withoutTitle && <div className={scss.table_title} />}
            <div className={scss.table_headers} />
            <div className={scss.table_body}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className={scss.table_row}>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className={scss.table_td} />
                        ))}
                    </div>
                ))}
            </div>
            <div className={scss.table_pagination}>
                <div className={scss.pagination_input} />
                <div className={scss.pagination_numbers} />
            </div>
            <div className={scss.shimmer} />
        </div>
    );
};
