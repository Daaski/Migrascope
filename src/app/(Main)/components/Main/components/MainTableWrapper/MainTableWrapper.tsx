import { MainTable } from 'app/(Main)/components/Main/components/Table';
import { Column } from 'app/(Main)/components/Main/components/Table/Column';

import scss from './MainTableWrapper.module.scss';

const tableData = [
    {
        id: 1,
        name1: 'testim0',
        name2: 'testiruem0',
        name3: 'testiruemдлинную',
        name4: 'testiruemдли',
    },
    {
        id: 2,
        name1: 'testim1',
        name2: 'testiruem1',
        name3: 'testiruem длинную',
        name4: 'testiruem ',
    },
    {
        id: 3,
        name1: 'testim2',
        name2: 'testiruem2',
        name3: 'testiruem длинную',
        name4: 'testiruem ',
    },
    {
        id: 4,
        name1: 'testim3',
        name2: 'testiruem3',
        name3: 'testiruem длинную',
        name4: 'testiruem',
    },
    {
        id: 5,
        name1: 'testim4',
        name2: 'testiruem4',
        name3: 'testiruem длинную',
        name4: 'testiruem',
    },
];

export const MainTableWrapper = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return (
        <>
            <div className={scss.table_title_wrapper}>
                <h3 className={scss.table_title}>ООО Что-то</h3>
                <span className={scss.table_title_role}>Владелец</span>
            </div>
            <MainTable
                paginationData={{ totalPages: 15 }}
                tableData={tableData}
            >
                <Column field="id" header="Айдишник" />
                <Column field="name1" header="Имя пользователя" />
                <Column field="name2" header="Активность" />
                <Column field="name3" header="Длинная строка" />
                <Column field="name4" header="Длинная новая" />
            </MainTable>
        </>
    );
};
