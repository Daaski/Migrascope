'use client';

import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

import { SearchParamsHelper } from 'utils/searchParamsHelper';

import { InputSelect } from 'components/UI/Inputs/InputSelect';
import { InputCheckbox } from 'components/UI/Inputs/InputCheckbox';
import { Button } from 'components/UI/Buttons/Button';

import {
    RolesType,
    SettingsMenuProps,
    UserType,
} from 'app/(Main)/components/Main/components/MainTableWrapper/components/SettingsTooltip/types';

import scss from './SettingsTooltip.module.scss';

const testUsers = [
    {
        id: 1,
        name: 'Это я',
    },
    {
        id: 2,
        name: 'И это я',
    },
];

export const SettingsMenu: FC<SettingsMenuProps> = ({
    opacity,
    visible,
    setVisible,
}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const queryHelper = new SearchParamsHelper(searchParams.entries);

    const queryUser = searchParams.get('user')
        ? testUsers.find((u) => u.name === searchParams.get('user'))
        : testUsers[0];

    const roles = useMemo(() => {
        return searchParams.get('roles')?.split(',') ?? [];
    }, [searchParams]);

    const [selectedUser, setSelectedUser] = useState<UserType>(
        queryUser as UserType
    );

    const [selectedRoles, setSelectedRoles] = useState<RolesType>({
        owner: roles?.includes('owner'),
        admin: roles?.includes('admin'),
        observer: roles?.includes('observer'),
    });

    const unsavedChanges = useRef(false);

    const handleChangeCheckbox = (
        fieldName: 'owner' | 'admin' | 'observer',
        value: boolean
    ) => {
        unsavedChanges.current = true;
        const newRoles = { ...selectedRoles };
        newRoles[fieldName] = value;
        setSelectedRoles(newRoles);
    };

    useEffect(() => {
        return () => {
            if (unsavedChanges.current) {
                setSelectedRoles({
                    owner: roles?.includes('owner'),
                    admin: roles?.includes('admin'),
                    observer: roles?.includes('observer'),
                });
                setSelectedUser(queryUser as UserType);
            }
        };
    }, [queryUser, roles, visible]);

    const handleSave = () => {
        unsavedChanges.current = false;
        const roles = Object.entries(selectedRoles)
            .filter((el) => el[1])
            .map((el) => el[0])
            .join(',');
        queryHelper.set('roles', roles);
        queryHelper.set('user', selectedUser.name);
        router.replace(pathname + queryHelper.getParams, { scroll: false });
        setVisible(false);
    };

    const handleReset = () => {
        unsavedChanges.current = false;
        queryHelper.delete('roles');
        queryHelper.delete('user');
        router.replace(pathname + queryHelper.getParams, { scroll: false });
        setSelectedUser(testUsers[0]);
        setSelectedRoles({
            admin: false,
            observer: false,
            owner: false,
        });
        setVisible(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ opacity }}
            transition={{ duration: 1 }}
            className={scss.settings_menu}
        >
            <h4 className={scss.settings_title}>Фильтрация списка компаний</h4>
            <div className={scss.select_user_wrapper}>
                <InputSelect
                    listValues={testUsers}
                    onChange={(v) => {
                        unsavedChanges.current = true;
                        setSelectedUser(v);
                    }}
                    value={selectedUser.name}
                    name="Select user"
                />
            </div>
            <InputCheckbox
                name="owner checkbox"
                label="Владелец"
                value={selectedRoles.owner}
                onChange={(v) => handleChangeCheckbox('owner', v)}
            />
            <InputCheckbox
                name="admin checkbox"
                label="Админ"
                value={selectedRoles.admin}
                onChange={(v) => handleChangeCheckbox('admin', v)}
            />
            <InputCheckbox
                name="observer checkbox"
                label="Наблюдатель"
                value={selectedRoles.observer}
                onChange={(v) => handleChangeCheckbox('observer', v)}
            />
            <div className={scss.buttons_wrapper}>
                <Button onClick={handleSave} type="button">
                    Сохранить
                </Button>
                <button onClick={handleReset}>Сбросить</button>
            </div>
        </motion.div>
    );
};
