import { Suspense } from 'react';

import { Profile } from 'components/Profile';
import { News } from 'components/News';
import { ProgressBars } from 'app/(Main)/components/Main/components/ProgressBars';
import { TableActions } from 'app/(Main)/components/Main/components/TableActions';
import { MainTableWrapper } from 'app/(Main)/components/Main/components/MainTableWrapper';
import { NewsSkeleton } from 'components/News/Skeleton';
import { ProfileSkeleton } from 'components/Profile/Skeleton';
import {
    BarsSkeleton,
    TableSkeleton,
} from 'app/(Main)/components/Sceletons/Skeletons';

import { ProgressBarsType } from 'app/(Main)/components/Main/components/ProgressBars/types';

import scss from 'app/(Main)/components/Main/Main.module.scss';

const barsData: ProgressBarsType[] = [
    { title: 'Выполнено', percentage: 75, color: '#7DC066' },
    { title: 'Отклонено', percentage: 37.5, color: '#E5646C' },
    { title: 'Открыто', percentage: 50, color: '#59B4D1' },
    { title: 'Сдвинуто', percentage: 12.5, color: '#F3935D' },
    { title: 'Отменено', percentage: 25, color: '#727880' },
];

export const Main = () => {
    return (
        <>
            <main style={{ flex: 1 }}>
                <Suspense fallback={<ProfileSkeleton />}>
                    <Profile />
                </Suspense>
                <Suspense fallback={<BarsSkeleton />}>
                    <ProgressBars barsData={barsData} />
                </Suspense>
                <section className={scss.table_wrapper}>
                    <TableActions />
                    <Suspense fallback={<TableSkeleton />}>
                        <MainTableWrapper />
                    </Suspense>
                </section>
            </main>
            <Suspense fallback={<NewsSkeleton />}>
                <News />
            </Suspense>
        </>
    );
};
