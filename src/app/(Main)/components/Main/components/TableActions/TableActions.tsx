import { SelectTableType } from 'app/(Main)/components/Main/components/MainTableWrapper/components/SelectTableType';
import { SearchTableInput } from 'app/(Main)/components/Main/components/MainTableWrapper/components/SearchTableInput';
import { SettingsTooltip } from 'app/(Main)/components/Main/components/MainTableWrapper/components/SettingsTooltip';
import { AddCompanyTooltip } from 'app/(Main)/components/Main/components/MainTableWrapper/components/AddCompanyTooltip';

import scss from 'app/(Main)/components/Main/components/MainTableWrapper/MainTableWrapper.module.scss';

export const TableActions = () => {
    return (
        <div className={scss.table_actions}>
            <SelectTableType />
            <SearchTableInput />
            <SettingsTooltip />
            <AddCompanyTooltip />
        </div>
    );
};
